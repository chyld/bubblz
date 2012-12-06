class BubbleController < ApplicationController
  def index
  end

  def data
    url = params[:url]
    html = HTTParty.get(url)
    render :json => html.split.uniq
  end
end
