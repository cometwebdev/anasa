class User < ApplicationRecord
  validates :email, :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: {minimum: 6}, allow_nil: true
  validates :full_name, presence: true, allow_nil: true
  
  
  has_many :user_teams,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :UserTeam
  
  has_many :teams,
    through: :user_teams,
    source: :team

    
  #GAASPIRE
  def generate_unique_session_token
    token = SecureRandom::urlsafe_base64
    while User.find_by(session_token: token)
      token = SecureRandom::urlsafe_base64
    end
    token
  end

  attr_reader :password
  after_initialize :ensure_session_token

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user if user && user.is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = generate_unique_session_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= generate_unique_session_token
  end
end
