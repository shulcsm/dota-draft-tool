defmodule Draft.LobbyController do
  use Draft.Web, :controller

  def hasher, do: Hashids.new() # @TODO salt from config  
  
  def index(conn, _params) do
    json conn, %{}
  end

  def create(conn, _params) do
    # @TODO create lobby, persist and return that. Dummy for now.
    json conn, %{
      id: 1,
      hashid: Hashids.encode(hasher, 1)
    }
  end
end
