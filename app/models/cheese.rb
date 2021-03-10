class Cheese < ApplicationRecord
  has_many :comments
end

before_action :authorize_request, except: [:index, :show]