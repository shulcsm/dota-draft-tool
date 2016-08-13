defmodule Draft.LobbyChannel do
  use Phoenix.Channel
  require Logger

  def join("lobby:" <> hash_id, _message, socket) do
    id = String.to_atom(hash_id)
    pid = Draft.LobbySupervisor.get_or_start(id)
    IO.inspect(pid)
    {:ok, socket}
  end
end
