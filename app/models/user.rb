class User < ApplicationRecord
  has_many :comments
  has_secure_password

  validates :username, presence: true, uniqueness: true
  validates :password, length: { minimum: 6 }
end

before_action :authorize_request, except: [:index, :show]