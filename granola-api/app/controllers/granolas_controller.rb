class GranolasController < ApplicationController
  def index
    granolas = Granola.all
    render json: GranolaSerializer.new(granolas)
  end

  def show
    granola = Granola.find_by(params[:id])
    render json: GranolaSerializer.new(granola)
  end

end
