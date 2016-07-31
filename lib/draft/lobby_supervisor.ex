defmodule Draft.LobbySupervisor do
  use Supervisor

  @name Draft.LobbySupervisor
  
  def start_link do
    Supervisor.start_link(__MODULE__, [], name: @name)
  end

  def start_agent() do
    Supervisor.start_child(@name, [])
  end

  def init([]) do
    children = [
      worker(Draft.LobbyServer, [],  restart: :transient)
    ]

    supervise(children, strategy: :simple_one_for_one)
  end
end
