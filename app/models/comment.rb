class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :cheese
end

before_action :authorize_request, except: [:index, :show]