defmodule Draft.LobbyController do
  use Draft.Web, :controller

  alias Draft.Lobby
  
  def hasher, do: Hashids.new() # @TODO salt from config  
  
  def index(conn, _params) do
    json conn, %{}
  end

  def create(conn, _params) do
    lobby = %Lobby{} |> Repo.insert!
    render conn, "show.json", lobby: lobby, hashid: Hashids.encode(hasher, lobby.id)
  end
end
