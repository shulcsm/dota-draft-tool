defmodule Draft.LobbyTest do
  use Draft.ModelCase

  alias Draft.Lobby

  @valid_attrs %{state: "some content"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = Lobby.changeset(%Lobby{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = Lobby.changeset(%Lobby{}, @invalid_attrs)
    refute changeset.valid?
  end
end
