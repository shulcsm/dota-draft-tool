defmodule Draft.LobbyView do
  use Draft.Web, :view

  def render("show.json", %{lobby: lobby, hashid: hashid}) do
    %{
      id: lobby.id,
      hashid: hashid
    }
  end
end
