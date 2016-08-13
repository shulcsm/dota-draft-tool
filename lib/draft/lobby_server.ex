defmodule Draft.LobbyServer do
  # require Logger

  def start_link(id) do
    Agent.start_link(fn -> [] end, name: id)
  end
end
