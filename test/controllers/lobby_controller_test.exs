defmodule Draft.LobbyControllerTest do
  use Draft.ConnCase

  test "Lobby create", %{conn: conn} do
    conn = post conn, "/api/lobby"
    assert json_response(conn, 200)
  end
end
