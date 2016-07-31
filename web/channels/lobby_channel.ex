defmodule Draft.LobbyChannel do
  use Phoenix.Channel
  require Logger

  def join("lobby:" <> _hash_id, _message, socket) do
    Draft.LobbySupervisor.start_agent()
    {:ok, socket}
  end
end
