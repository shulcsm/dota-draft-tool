defmodule Draft.LobbyControllerTest do
  use Draft.ConnCase

  alias Draft.Lobby
  
  test "Lobby create", %{conn: conn} do
    conn = post conn, "/api/lobby"
    body = json_response(conn, 200)

    assert body["id"]
    assert body["hashid"]
    assert Repo.get_by(Lobby, id: body["id"])
  end
end
