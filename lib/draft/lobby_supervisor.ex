defmodule Draft.LobbySupervisor do
  use Supervisor

  @name Draft.LobbySupervisor
  
  def start_link() do
    Supervisor.start_link(__MODULE__, [], name: @name)
  end

  def get_or_start(id) do
    case Supervisor.start_child(@name, [id]) do
      {:error, {:already_started, pid }} ->
        pid
      {:ok, pid} ->
        pid
    end
  end

  def init([]) do
    children = [
      worker(Draft.LobbyServer, [], restart: :transient)
    ]

    supervise(children, strategy: :simple_one_for_one)
  end
end
