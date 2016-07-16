defmodule Draft.PageController do
  use Draft.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
