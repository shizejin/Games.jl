var documenterSearchIndex = {"docs": [

{
    "location": "index.html#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "index.html#Games.jl-1",
    "page": "Home",
    "title": "Games.jl",
    "category": "section",
    "text": "Games.jl is a Julia package for computation of Game Theory."
},

{
    "location": "index.html#Installation-1",
    "page": "Home",
    "title": "Installation",
    "category": "section",
    "text": "Games.jl is an unregistered package that currently under development.To install the package, open a Julia session and typePkg.clone(\"https://github.com/QuantEcon/Games.jl\")"
},

{
    "location": "index.html#Usage-1",
    "page": "Home",
    "title": "Usage",
    "category": "section",
    "text": "Once installed, the Games package can be used by typingusing GamesThe Base type Player can be created by passing a payoff matrix.player1 = Player([3 1; 0 2])A 2-player NormalFormGame can be created either by passing Player instances.player2 = Player([2 0; 1 3])\ng = NormalFormGame((player1, player2))or by passing a payoff bimatrix directly.payoff_bimatrix = Array(Int, 2, 2, 2)\npayoff_bimatrix[1, 1, :] = [3, 2]\npayoff_bimatrix[1, 2, :] = [1, 1]\npayoff_bimatrix[2, 1, :] = [0, 0]\npayoff_bimatrix[2, 2, :] = [2, 3]\ng = NormalFormGame(payoff_bimatrix)After construction of NormalFormGame, we can find its Nash Equilibria by using methods of Games, for example, pure_nash finds all pure action Nash Equilibria by enumeration.pure_nash(g)Please see lectures on QuantEcon for more details."
},

{
    "location": "index.html#lectures-1",
    "page": "Home",
    "title": "Lectures",
    "category": "section",
    "text": "Some lectures of this package is available on QuantEcon:Tools for Game Theory\nA Recursive Formulation of Repeated Games"
},

{
    "location": "index.html#Library-Outline-1",
    "page": "Home",
    "title": "Library Outline",
    "category": "section",
    "text": "Base Types and Methods\nComputing Nash Equilibria\nRepeated Games"
},

{
    "location": "lib/base_types_and_methods.html#",
    "page": "Base Types and Methods",
    "title": "Base Types and Methods",
    "category": "page",
    "text": ""
},

{
    "location": "lib/base_types_and_methods.html#base_types_and_methods-1",
    "page": "Base Types and Methods",
    "title": "Base Types and Methods",
    "category": "section",
    "text": ""
},

{
    "location": "lib/base_types_and_methods.html#Games.NormalFormGame",
    "page": "Base Types and Methods",
    "title": "Games.NormalFormGame",
    "category": "Type",
    "text": "Class representing an N-player normal form game.\n\nFields\n\nplayers::NTuple{N,Player{N,T<:Real}} : Tuple of Player instances.\nN::Int : The number of players.\nnums_actions::NTuple{N,Int} : Tuple of the numbers of actions, one for each\n\nplayer.\n\n\n\n"
},

{
    "location": "lib/base_types_and_methods.html#Games.NormalFormGame-Tuple{Array{Games.Player{N,T},1}}",
    "page": "Base Types and Methods",
    "title": "Games.NormalFormGame",
    "category": "Method",
    "text": "Constructor of an N-player NormalFormGame.\n\nArguments\n\nplayers::Vector{Player} : Vector of Player instances.\n\n\n\n"
},

{
    "location": "lib/base_types_and_methods.html#Games.NormalFormGame-Tuple{Array{T<:Real,2}}",
    "page": "Base Types and Methods",
    "title": "Games.NormalFormGame",
    "category": "Method",
    "text": "NormalFormGame{T<:Real}(payoffs::Matrix{T})\n\nConstruct a symmetric 2-player NormalFormGame with a square matrix.\n\nArguments\n\npayoffs::Matrix{T<:Real} : Square matrix representing each player's payoff matrix.\n\n\n\n"
},

{
    "location": "lib/base_types_and_methods.html#Games.NormalFormGame-Tuple{Array{T<:Real,M}}",
    "page": "Base Types and Methods",
    "title": "Games.NormalFormGame",
    "category": "Method",
    "text": "NormalFormGame{T<:Real,M}(payoffs::Array{T,M})\n\nConstruct an N-player NormalFormGame for N>=2 with an array payoffs of M=N+1 dimensions, where payoffs[a_1, a_2, ..., a_N, :] contains a profile of N payoff values.\n\nArguments\n\npayoffs::Array{T<:Real} : Array with ndims=N+1 containing payoff profiles.\n\n\n\n"
},

{
    "location": "lib/base_types_and_methods.html#Games.NormalFormGame-Tuple{Tuple{Vararg{Games.Player{N,T},N}}}",
    "page": "Base Types and Methods",
    "title": "Games.NormalFormGame",
    "category": "Method",
    "text": "Constructor of an N-player NormalFormGame.\n\nArguments\n\nplayers::NTuple{N,Player} : Tuple of Player instances.\n\n\n\n"
},

{
    "location": "lib/base_types_and_methods.html#Games.NormalFormGame-Tuple{Type,Tuple{Vararg{Int64,N}}}",
    "page": "Base Types and Methods",
    "title": "Games.NormalFormGame",
    "category": "Method",
    "text": "Constructor of an N-player NormalFormGame, consisting of payoffs all 0.\n\nArguments\n\nT::Type : Type of payoff values; defaults to Float64 if not specified.\nnums_actions::NTuple{N,Int} : Numbers of actions of the N players.\n\n\n\n"
},

{
    "location": "lib/base_types_and_methods.html#Games.NormalFormGame-Tuple{Vararg{Games.Player{N,T},N}}",
    "page": "Base Types and Methods",
    "title": "Games.NormalFormGame",
    "category": "Method",
    "text": "Constructor of an N-player NormalFormGame.\n\nArguments\n\nplayers::Player{N,T}... : N Player instances\n\nExamples\n\n# p1, p2, and p3 are all of type `Player{3,T}` for some `T`\nNormalFormGame(p1, p2, p3)\n\n\n\n"
},

{
    "location": "lib/base_types_and_methods.html#Games.Player",
    "page": "Base Types and Methods",
    "title": "Games.Player",
    "category": "Type",
    "text": "Type representing a player in an N-player normal form game.\n\nArguments\n\npayoff_array::Array{T<:Real} : Array representing the player's payoff\n\nfunction.\n\nFields\n\npayoff_array::Array{T<:Real} : Array representing the player's payoff\n\nfunction.\n\n\n\n"
},

{
    "location": "lib/base_types_and_methods.html#Games.best_response-Tuple{Games.Player,Union{Tuple{Vararg{Array{T<:Real,1},N}},Tuple{Vararg{T<:Integer,N}},Union{Array{T<:Real,1},Integer},Void},Array{Float64,1}}",
    "page": "Base Types and Methods",
    "title": "Games.best_response",
    "category": "Method",
    "text": "Return the perturbed best response to opponents_actions.\n\nArguments\n\nplayer::Player : Player instance.\nopponents_actions::Union{Action,ActionProfile,Void} : Profile of N-1\n\nopponents' actions. If N=2, then it must be a vector of reals (in which case it is treated as the opponent's mixed action) or a scalar of integer (in which case it is treated as the opponent's pure action). If N>2, then it must be a tuple of N-1 integers (pure actions) or N-1 vectors of reals (mixed actions). (For the degenerate case N=1, it must be nothing.)\n\npayoff_perturbation::Vector{Float64} : Vector of length equal to the number\n\nof actions of the player containing the values (\"noises\") to be added to the payoffs in determining the best response.\n\nReturns\n\n::Int : Best response action.\n\n\n\n"
},

{
    "location": "lib/base_types_and_methods.html#Games.best_response-Tuple{Games.Player,Union{Tuple{Vararg{Array{T<:Real,1},N}},Tuple{Vararg{T<:Integer,N}},Union{Array{T<:Real,1},Integer},Void}}",
    "page": "Base Types and Methods",
    "title": "Games.best_response",
    "category": "Method",
    "text": "Return a best response action to opponents_actions.\n\nArguments\n\nplayer::Player : Player instance.\nopponents_actions::Union{Action,ActionProfile,Void} : Profile of N-1\n\nopponents' actions. If N=2, then it must be a vector of reals (in which case it is treated as the opponent's mixed action) or a scalar of integer (in which case it is treated as the opponent's pure action). If N>2, then it must be a tuple of N-1 integers (pure actions) or N-1 vectors of reals (mixed actions). (For the degenerate case N=1, it must be nothing.)\n\ntie_breaking::AbstractString(\"smallest\") : Control how to break a tie (see\n\nReturns for details).\n\ntol::Float64 : Tolerance to be used to determine best response actions.\n\nReturns\n\n::Int : If tie_breaking=\"smallest\", returns the best response action with\n\nthe smallest index; if tie_breaking=\"random\", returns an action randomly chosen from the best response actions.\n\n\n\n"
},

{
    "location": "lib/base_types_and_methods.html#Games.best_responses-Tuple{Games.Player,Union{Tuple{Vararg{Array{T<:Real,1},N}},Tuple{Vararg{T<:Integer,N}},Union{Array{T<:Real,1},Integer},Void}}",
    "page": "Base Types and Methods",
    "title": "Games.best_responses",
    "category": "Method",
    "text": "Return all the best response actions to opponents_actions.\n\nArguments\n\nplayer::Player : Player instance.\nopponents_actions::Union{Action,ActionProfile,Void} : Profile of N-1\n\nopponents' actions. If N=2, then it must be a vector of reals (in which case it is treated as the opponent's mixed action) or a scalar of integer (in which case it is treated as the opponent's pure action). If N>2, then it must be a tuple of N-1 integers (pure actions) or N-1 vectors of reals (mixed actions). (For the degenerate case N=1, it must be nothing.)\n\n;tol::Float64 : Tolerance to be used to determine best response actions.\n\nReturns\n\nbest_responses::Vector{Int} : Vector containing all the best response\n\nactions.\n\n\n\n"
},

{
    "location": "lib/base_types_and_methods.html#Games.is_best_response-Tuple{Games.Player,Array{T<:Real,1},Union{Tuple{Vararg{Array{T<:Real,1},N}},Tuple{Vararg{T<:Integer,N}},Union{Array{T<:Real,1},Integer},Void}}",
    "page": "Base Types and Methods",
    "title": "Games.is_best_response",
    "category": "Method",
    "text": "Return true if own_action is a best response to opponents_actions.\n\nArguments\n\nplayer::Player : Player instance.\nown_action::MixedAction : Own mixed action (vector of reals).\nopponents_actions::Union{Action,ActionProfile,Void} : Profile of N-1\n\nopponents' actions. If N=2, then it must be a vector of reals (in which case it is treated as the opponent's mixed action) or a scalar of integer (in which case it is treated as the opponent's pure action). If N>2, then it must be a tuple of N-1 integers (pure actions) or N-1 vectors of reals (mixed actions). (For the degenerate case N=1, it must be nothing.)\n\n;tol::Float64 : Tolerance to be used to determine best response actions.\n\nReturns\n\n::Bool : True if own_action is a best response to opponents_actions;\n\nfalse otherwise.\n\n\n\n"
},

{
    "location": "lib/base_types_and_methods.html#Games.is_best_response-Tuple{Games.Player,Integer,Union{Tuple{Vararg{Array{T<:Real,1},N}},Tuple{Vararg{T<:Integer,N}},Union{Array{T<:Real,1},Integer},Void}}",
    "page": "Base Types and Methods",
    "title": "Games.is_best_response",
    "category": "Method",
    "text": "Return True if own_action is a best response to opponents_actions.\n\nArguments\n\nplayer::Player : Player instance.\nown_action::PureAction : Own pure action (integer).\nopponents_actions::Union{Action,ActionProfile,Void} : Profile of N-1\n\nopponents' actions. If N=2, then it must be a vector of reals (in which case it is treated as the opponent's mixed action) or a scalar of integer (in which case it is treated as the opponent's pure action). If N>2, then it must be a tuple of N-1 integers (pure actions) or N-1 vectors of reals (mixed actions). (For the degenerate case N=1, it must be nothing.)\n\n;tol::Float64 : Tolerance to be used to determine best response actions.\n\nReturns\n\n::Bool : True if own_action is a best response to opponents_actions;\n\nvalse otherwise.\n\n\n\n"
},

{
    "location": "lib/base_types_and_methods.html#Games.is_nash",
    "page": "Base Types and Methods",
    "title": "Games.is_nash",
    "category": "Function",
    "text": "Return true if action_profile is a Nash equilibrium.\n\nArguments\n\ng::NormalFormGame : Instance of N-player NormalFormGame.\naction_profile::ActionProfile : Tuple of N integers (pure actions) or N\n\nvectors of reals (mixed actions).\n\nReturns\n\n::Bool\n\n\n\n"
},

{
    "location": "lib/base_types_and_methods.html#Games.is_nash-Tuple{Games.NormalFormGame{1,T<:Real},Union{Array{T<:Real,1},Integer}}",
    "page": "Base Types and Methods",
    "title": "Games.is_nash",
    "category": "Method",
    "text": "Return true if action is a Nash equilibrium of a trivial game with 1 player.\n\nArguments\n\ng::NormalFormGame : Instance of 1-player NormalFormGame.\naction::Action : Integer (pure action) or vector of reals (mixed action).\n\nReturns\n\n::Bool\n\n\n\n"
},

{
    "location": "lib/base_types_and_methods.html#Games.payoff_vector-Tuple{Games.Player,Tuple{Vararg{T<:Integer,N}}}",
    "page": "Base Types and Methods",
    "title": "Games.payoff_vector",
    "category": "Method",
    "text": "Return a vector of payoff values for a Player in an N>2 player game, one for each own action, given a tuple of the opponents' pure actions.\n\nArguments\n\nplayer::Player : Player instance.\nopponents_actions::PureActionProfile : Tuple of N-1 opponents' pure\n\nactions.\n\nReturns\n\n::Vector : Payoff vector.\n\n\n\n"
},

{
    "location": "lib/base_types_and_methods.html#Games.payoff_vector-Tuple{Games.Player{1,T<:Real},Void}",
    "page": "Base Types and Methods",
    "title": "Games.payoff_vector",
    "category": "Method",
    "text": "Return a vector of payoff values for a Player in a trivial game with 1 player, one for each own action.\n\nArguments\n\nplayer::Player : Player instance.\nopponent_action::Void\n\nReturns\n\n::Vector : Payoff vector.\n\n\n\n"
},

{
    "location": "lib/base_types_and_methods.html#Games.payoff_vector-Tuple{Games.Player{2,T<:Real},Array{T<:Real,1}}",
    "page": "Base Types and Methods",
    "title": "Games.payoff_vector",
    "category": "Method",
    "text": "Return a vector of payoff values for a Player in a 2-player game, one for each own action, given the opponent's mixed action.\n\nArguments\n\nplayer::Player : Player instance.\nopponent_action::MixedAction : Opponent's mixed action (vector of reals).\n\nReturns\n\n::Vector : Payoff vector.\n\n\n\n"
},

{
    "location": "lib/base_types_and_methods.html#Games.payoff_vector-Tuple{Games.Player{2,T<:Real},Integer}",
    "page": "Base Types and Methods",
    "title": "Games.payoff_vector",
    "category": "Method",
    "text": "Return a vector of payoff values for a Player in a 2-player game, one for each own action, given the opponent's pure action.\n\nArguments\n\nplayer::Player : Player instance.\nopponent_action::PureAction : Opponent's pure action (integer).\n\nReturns\n\n::Vector : Payoff vector.\n\n\n\n"
},

{
    "location": "lib/base_types_and_methods.html#Games.payoff_vector-Tuple{Games.Player{N,T1},Tuple{Vararg{Array{T2,1},N}}}",
    "page": "Base Types and Methods",
    "title": "Games.payoff_vector",
    "category": "Method",
    "text": "Return a vector of payoff values for a Player in an N>2 player game, one for each own action, given a tuple of the opponents' mixed actions.\n\nArguments\n\nplayer::Player : Player instance.\nopponents_actions::MixedActionProfile : Tuple of N-1 opponents' mixed\n\nactions.\n\nReturns\n\n::Vector : Payoff vector.\n\n\n\n"
},

{
    "location": "lib/base_types_and_methods.html#Games.pure2mixed-Tuple{Integer,Integer}",
    "page": "Base Types and Methods",
    "title": "Games.pure2mixed",
    "category": "Method",
    "text": "Convert a pure action to the corresponding mixed action.\n\nArguments\n\nnum_actions::Integer : The number of the pure actions (= the length of a\n\nmixed action).\n\naction::PureAction : The pure action to convert to the corresponding mixed\n\naction.\n\nReturns\n\nmixed_action::Vector{Float64} : The mixed action representation of the\n\ngiven pure action.\n\n\n\n"
},

{
    "location": "lib/base_types_and_methods.html#Games.covariance_game-Tuple{Tuple{Vararg{Int64,N}},Real}",
    "page": "Base Types and Methods",
    "title": "Games.covariance_game",
    "category": "Method",
    "text": "covariance_game{N}(nums_actions::NTuple{N,Int}, rho::Real)\n\nReturn a random N-player NormalFormGame instance with N>=2 where the payoff profiles are drawn independently from the standard multi-normal with the covariance of any pair of payoffs equal to rho, as studied in Rinott and Scarsini (2000).\n\nArguements\n\nnums_actions::NTuple{N,Int}: Tuple of the numbers of actions,  one for each　player.\nrho::T: Covariance of a pair of payoff values. Must be in [-1/(N-1), 1], where N is the number of players.\n\nReturns\n\n::NormalFormGame: The generated random N-player NormalFormGame.\n\nReferences\n\nY. Rinott and M. Scarsini, \"On the Number of Pure Strategy Nash Equilibria in Random Games,\" Games and Economic Behavior (2000), 274-293.\n\n\n\n"
},

{
    "location": "lib/base_types_and_methods.html#Games.random_game-Tuple{Tuple{Vararg{Int64,N}}}",
    "page": "Base Types and Methods",
    "title": "Games.random_game",
    "category": "Method",
    "text": "random_game{N}(nums_actions::NTuple{N,Int})\n\nReturn a random N-player NormalFormGame instance where the payoffs are drawn independently from the uniform distribution on [0, 1).\n\nArguements\n\nnums_actions::NTuple{N,Int}: Tuple of the numbers of actions, one for each player.\n\nReturns\n\n::NormalFormGame: The generated random N-player NormalFormGame.\n\n\n\n"
},

{
    "location": "lib/base_types_and_methods.html#Exported-1",
    "page": "Base Types and Methods",
    "title": "Exported",
    "category": "section",
    "text": "Modules = [Games]\nPages   = [\"normal_form_game.jl\", \"random.jl\"]\nPrivate = false"
},

{
    "location": "lib/base_types_and_methods.html#Internal-1",
    "page": "Base Types and Methods",
    "title": "Internal",
    "category": "section",
    "text": "Modules = [Games]\nPages   = [\"normal_form_game.jl\", \"random.jl\"]\nPublic = false"
},

{
    "location": "lib/computing_nash_equilibria.html#",
    "page": "Computing Nash Equilibria",
    "title": "Computing Nash Equilibria",
    "category": "page",
    "text": ""
},

{
    "location": "lib/computing_nash_equilibria.html#computing_nash_equilibria-1",
    "page": "Computing Nash Equilibria",
    "title": "Computing Nash Equilibria",
    "category": "section",
    "text": ""
},

{
    "location": "lib/computing_nash_equilibria.html#Games.pure_nash-Tuple{Games.NormalFormGame}",
    "page": "Computing Nash Equilibria",
    "title": "Games.pure_nash",
    "category": "Method",
    "text": "Finds all pure action Nash equilibria for a normal form game. It returns an empty array if there is no pure action Nash.\n\nCurrently uses a brute force algorithm, but that hopefully will change in the future.\n\n\n\n"
},

{
    "location": "lib/computing_nash_equilibria.html#Exported-1",
    "page": "Computing Nash Equilibria",
    "title": "Exported",
    "category": "section",
    "text": "Modules = [Games]\nPages   = [\"pure_nash.jl\"]\nPrivate = false"
},

{
    "location": "lib/computing_nash_equilibria.html#Internal-1",
    "page": "Computing Nash Equilibria",
    "title": "Internal",
    "category": "section",
    "text": "Modules = [Games]\nPages   = [\"pure_nash.jl\"]\nPublic = false"
},

{
    "location": "lib/repeated_games.html#",
    "page": "Repeated Games",
    "title": "Repeated Games",
    "category": "page",
    "text": ""
},

{
    "location": "lib/repeated_games.html#repeated_games-1",
    "page": "Repeated Games",
    "title": "Repeated Games",
    "category": "section",
    "text": ""
},

{
    "location": "lib/repeated_games.html#Games.RepeatedGame",
    "page": "Repeated Games",
    "title": "Games.RepeatedGame",
    "category": "Type",
    "text": "This is a type for a specific type of repeated games\n\nIt takes a stage game that is repeated in every period and all agents discount future at rate δ\n\n\n\n"
},

{
    "location": "lib/repeated_games.html#Games.RepeatedGame-Tuple{Games.Player,Games.Player,Float64}",
    "page": "Repeated Games",
    "title": "Games.RepeatedGame",
    "category": "Method",
    "text": "Helper constructor that builds game from players\n\n\n\n"
},

{
    "location": "lib/repeated_games.html#Games.outerapproximation-Tuple{Games.RepeatedGame{2,T<:Real}}",
    "page": "Repeated Games",
    "title": "Games.outerapproximation",
    "category": "Method",
    "text": "Approximates the set of equilibrium value set for a repeated game with the outer hyperplane approximation described by Judd, Yeltekin, Conklin 2002\n\nNOTE: If your code fails then it might be the case that the value set is       only the value which corresponds to the pure action nash equilibrium       or you might just need more points to be precise enough for the       Polyhedra library to be able to convert to the vertice representation.\n\nThe arguments are\n\nrpd: 2 player repeated game\n\nThe keyword arguments are\n\nnH: Number of subgradients used in approximation\ntol: Tolerance in differences of set\nmaxiter: Maximum number of iterations\nverbose: Whether to display updates about iterations and distance\nnskipprint: Number of iterations between printing information (verbose=true)\ncheck_pure_nash: Whether to perform a check about whether a pure Nash equilibrium exists\nplib: Allows users to choose a particular package for the geometry computations (See Polyhedra.jl       docs for more info). By default, it chooses to use CDDLib.jl\n\n\n\n"
},

{
    "location": "lib/repeated_games.html#Games.unpack-Tuple{Games.RepeatedGame}",
    "page": "Repeated Games",
    "title": "Games.unpack",
    "category": "Method",
    "text": "Unpacks the elements of a repeated game\n\n\n\n"
},

{
    "location": "lib/repeated_games.html#Games.worst_value_1-Tuple{Games.RepeatedGame{2,T<:Real},Array{Float64,2},Array{Float64,1}}",
    "page": "Repeated Games",
    "title": "Games.worst_value_1",
    "category": "Method",
    "text": "See worst_value_i for documentation\n\n\n\n"
},

{
    "location": "lib/repeated_games.html#Games.worst_value_2-Tuple{Games.RepeatedGame{2,T<:Real},Array{Float64,2},Array{Float64,1}}",
    "page": "Repeated Games",
    "title": "Games.worst_value_2",
    "category": "Method",
    "text": "See worst_value_i for documentation\n\n\n\n"
},

{
    "location": "lib/repeated_games.html#Games.worst_value_i-Tuple{Games.RepeatedGame{2,T<:Real},Array{Float64,2},Array{Float64,1},Int64}",
    "page": "Repeated Games",
    "title": "Games.worst_value_i",
    "category": "Method",
    "text": "Given a constraint w ∈ W, this finds the worst possible payoff for agent i\n\nThe output of this function is used to create the values associated with incentive compatibility constraints\n\nThe arguments for this function are\n\nrpd: Two player repeated game\nH: Subgradients used to approximate value set\nC: Hyperplane levels for value set approximation\ni: Which player want worst value for\n\n\n\n"
},

{
    "location": "lib/repeated_games.html#Games.worst_values-Tuple{Games.RepeatedGame{2,T<:Real},Array{Float64,2},Array{Float64,1}}",
    "page": "Repeated Games",
    "title": "Games.worst_values",
    "category": "Method",
    "text": "See worst_value_i for documentation\n\n\n\n"
},

{
    "location": "lib/repeated_games.html#Exported-1",
    "page": "Repeated Games",
    "title": "Exported",
    "category": "section",
    "text": "Modules = [Games]\nPages   = [\"repeated_game_util.jl\", \"repeated_game.jl\"]\nPrivate = false"
},

{
    "location": "lib/repeated_games.html#Games.unitcircle-Tuple{Int64}",
    "page": "Repeated Games",
    "title": "Games.unitcircle",
    "category": "Method",
    "text": "Places npts equally spaced points along the 2 dimensional circle and returns the points with x coordinates in first column and y coordinates in second column\n\ni.e. if you wanted point i, it would be pts[i, :]\n\n\n\n"
},

{
    "location": "lib/repeated_games.html#Games.initialize_LP_matrices-Tuple{Games.RepeatedGame{2,T<:Real},Any}",
    "page": "Repeated Games",
    "title": "Games.initialize_LP_matrices",
    "category": "Method",
    "text": "Initialize matrices for the linear programming problems. It sets up the A matrix since it never changes, but only allocates space for b and c since they will be filled repeatedly on the iterations\n\nWe add nH slack variables (which will be constrained to be positive) to deal with inequalities associated with Ax leq b.\n\nmin c ⋅ x     Ax < b\n\nIn this case, the c vector will be determined by which subgradient is being used, so this function only allocates space for it.\n\nThe A matrix will be filled with nH set constraints and 2 incentive compatibility constraints. The set constraints restrain the linear programming problem to pick solutions that are in the current set of continuation values while the incentive compatibility constraints ensure the agents won't deviate.\n\nThe b vector is associated with the A matrix and gives the value for constraint.\n\nThe arguments for this function are\n\nrpd: Two player repeated game\nH: The subgradients used to approximate the value set\n\n\n\n"
},

{
    "location": "lib/repeated_games.html#Games.initialize_sg_hpl-Tuple{Games.RepeatedGame,Int64}",
    "page": "Repeated Games",
    "title": "Games.initialize_sg_hpl",
    "category": "Method",
    "text": "This is a function that initializes the subgradients, hyperplane levels, and extreme points of the value set by choosing an appropriate origin and radius.\n\nSee initialize_sg_hpl for more documentation\n\n\n\n"
},

{
    "location": "lib/repeated_games.html#Games.initialize_sg_hpl-Tuple{Int64,Array{Float64,1},Float64}",
    "page": "Repeated Games",
    "title": "Games.initialize_sg_hpl",
    "category": "Method",
    "text": "Initializes the following things for a 2 player repeated game.\n\nsubgradients\nextreme points of the convex set for values\nhyper plane levels\n\nThese are determined in the following way\n\nSubgradients are simply chosen from the unit circle.\nThe values for the extremum of the value set are just given by choosing points along a circle with specified origin and radius\nHyperplane levels are determined by computing the hyperplane level such that the extreme points from the circle are generated\n\nThe arguments are\n\n\n\n"
},

{
    "location": "lib/repeated_games.html#Internal-1",
    "page": "Repeated Games",
    "title": "Internal",
    "category": "section",
    "text": "Modules = [Games]\nPages   = [\"repeated_game_util.jl\", \"repeated_game.jl\"]\nPublic = false"
},

{
    "location": "lib/index.html#",
    "page": "Index",
    "title": "Index",
    "category": "page",
    "text": ""
},

{
    "location": "lib/index.html#Index-1",
    "page": "Index",
    "title": "Index",
    "category": "section",
    "text": "modules = [Games]"
},

]}
