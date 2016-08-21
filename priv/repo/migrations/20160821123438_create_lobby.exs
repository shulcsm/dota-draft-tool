defmodule Draft.Repo.Migrations.CreateLobby do
  use Ecto.Migration

  def change do
    create table(:lobbies) do
      add :state, :string

      timestamps()
    end

  end
end
