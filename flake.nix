{
  description = "Astro portfolio site";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { nixpkgs, flake-utils, ... }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in {
        devShells.default = pkgs.mkShell {
          buildInputs = [
            pkgs.nodejs_24
            pkgs.pnpm
          ];

          shellHook = ''
            echo "Node.js $(node -v)"
            echo "pnpm $(pnpm -v)"
          '';
        };
      }
    );
}