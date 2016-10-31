class Api::BenchesController < ApplicationController
end


  def create
    @bench = Bench.new(bench_params)
    if @bench.save
      render :show
    else
      render json: @bench.errors.full_messages, status: 422
    end
  end

  def show
    @bench = Bench.find(params[:id])
  end

  def update
    @bench = Bench.find(params[:id])
    if @bench.update(bench_params)
      render :show
    else
      render json: @bench.errors.full_messages, status: 422
    end
  end

  def destroy
    @bench = Bench.destroy(params[:id])
    render json: {}
  end

  def index
  end

  private

  def bench_params
    params.require(:bench).permit(:lat, :lon, :description)
  end
