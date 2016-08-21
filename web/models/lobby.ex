defmodule Draft.Lobby do
  use Draft.Web, :model

  
  schema "lobbies" do
    field :state, :string

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:state])
    |> validate_required([:state])
  end
end
