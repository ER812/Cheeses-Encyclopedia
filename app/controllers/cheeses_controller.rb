class CheesesController < ApplicationController
  before_action :set_cheese, only: [:show, :update, :destroy]

  # GET /cheeses
  def index
    @cheeses = Cheese.all

    render json: @cheeses
  end

  # GET /cheeses/1
  def show
    render json: @cheese
  end

  # POST /cheeses
  def create
    @cheese = Cheese.new(cheese_params)

    if @cheese.save
      render json: @cheese, status: :created, location: @cheese
    else
      render json: @cheese.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /cheeses/1
  def update
    if @cheese.update(cheese_params)
      render json: @cheese
    else
      render json: @cheese.errors, status: :unprocessable_entity
    end
  end

  # DELETE /cheeses/1
  def destroy
    @cheese.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_cheese
      @cheese = Cheese.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def cheese_params
      params.require(:cheese).permit(:region, :type, :source, :description, :culinary_uses)
    end
end
