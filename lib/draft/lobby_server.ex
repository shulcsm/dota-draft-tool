defmodule Draft.LobbyServer do
  # require Logger

  def start_link() do
    IO.puts "Agent started"
    Agent.start_link(fn -> [] end, name: :lobby) # @TODO pass in name
  end

end
