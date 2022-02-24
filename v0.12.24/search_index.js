var documenterSearchIndex = {"docs":
[{"location":"pages/api/#Finite-Differences","page":"API","title":"Finite Differences","text":"","category":"section"},{"location":"pages/api/","page":"API","title":"API","text":"FiniteDifferenceMethod\nFiniteDifferences.estimate_step\ncentral_fdm\nforward_fdm\nbackward_fdm\nextrapolate_fdm\nassert_approx_equal\nFiniteDifferences.UnadaptedFiniteDifferenceMethod\nFiniteDifferences.AdaptedFiniteDifferenceMethod\nFiniteDifferences.DEFAULT_CONDITION\nFiniteDifferences.DEFAULT_FACTOR","category":"page"},{"location":"pages/api/#FiniteDifferences.FiniteDifferenceMethod","page":"API","title":"FiniteDifferences.FiniteDifferenceMethod","text":"FiniteDifferenceMethod(\n    grid::AbstractVector{Int},\n    q::Int;\n    condition::Real=DEFAULT_CONDITION,\n    factor::Real=DEFAULT_FACTOR,\n    max_range::Real=Inf\n)\n\nConstruct a finite difference method.\n\nArguments\n\ngrid::Vector{Int}: The grid. See AdaptedFiniteDifferenceMethod or   UnadaptedFiniteDifferenceMethod.\nq::Int: Order of the derivative to estimate.\n\nKeywords\n\ncondition::Real: Condition number. See DEFAULT_CONDITION.\nfactor::Real: Factor number. See DEFAULT_FACTOR.\nmax_range::Real=Inf: Maximum distance that a function is evaluated from the input at   which the derivative is estimated.\n\nReturns\n\nFiniteDifferenceMethod: Specified finite difference method.\n\n\n\n\n\n","category":"type"},{"location":"pages/api/#FiniteDifferences.estimate_step","page":"API","title":"FiniteDifferences.estimate_step","text":"function estimate_step(\n    m::FiniteDifferenceMethod,\n    f::Function,\n    x::T\n) where T<:AbstractFloat\n\nEstimate the step size for a finite difference method m. Also estimates the error of the estimate of the derivative.\n\nArguments\n\nm::FiniteDifferenceMethod: Finite difference method to estimate the step size for.\nf::Function: Function to evaluate the derivative of.\nx::T: Point to estimate the derivative at.\n\nReturns\n\nTuple{<:AbstractFloat, <:AbstractFloat}: Estimated step size and an estimate of the   error of the finite difference estimate. The error will be NaN if the method failed   to estimate the error.\n\n\n\n\n\n","category":"function"},{"location":"pages/api/#FiniteDifferences.central_fdm","page":"API","title":"FiniteDifferences.central_fdm","text":"central_fdm(\n    p::Int,\n    q::Int;\n    adapt::Int=1,\n    condition::Real=DEFAULT_CONDITION,\n    factor::Real=DEFAULT_FACTOR,\n    max_range::Real=Inf,\n    geom::Bool=false\n)\n\nContruct a finite difference method at a central grid of p points.\n\nArguments\n\np::Int: Number of grid points.\nq::Int: Order of the derivative to estimate.\n\nKeywords\n\nadapt::Int=1: Use another finite difference method to estimate the magnitude of the   pth order derivative, which is important for the step size computation. Recurse   this procedure adapt times.\ncondition::Real: Condition number. See DEFAULT_CONDITION.\nfactor::Real: Factor number. See DEFAULT_FACTOR.\nmax_range::Real=Inf: Maximum distance that a function is evaluated from the input at   which the derivative is estimated.\ngeom::Bool: Use geometrically spaced points instead of linearly spaced points.\n\nReturns\n\nFiniteDifferenceMethod: The specified finite difference method.\n\n\n\n\n\n","category":"function"},{"location":"pages/api/#FiniteDifferences.forward_fdm","page":"API","title":"FiniteDifferences.forward_fdm","text":"forward_fdm(\n    p::Int,\n    q::Int;\n    adapt::Int=1,\n    condition::Real=DEFAULT_CONDITION,\n    factor::Real=DEFAULT_FACTOR,\n    max_range::Real=Inf,\n    geom::Bool=false\n)\n\nContruct a finite difference method at a forward grid of p points.\n\nArguments\n\np::Int: Number of grid points.\nq::Int: Order of the derivative to estimate.\n\nKeywords\n\nadapt::Int=1: Use another finite difference method to estimate the magnitude of the   pth order derivative, which is important for the step size computation. Recurse   this procedure adapt times.\ncondition::Real: Condition number. See DEFAULT_CONDITION.\nfactor::Real: Factor number. See DEFAULT_FACTOR.\nmax_range::Real=Inf: Maximum distance that a function is evaluated from the input at   which the derivative is estimated.\ngeom::Bool: Use geometrically spaced points instead of linearly spaced points.\n\nReturns\n\nFiniteDifferenceMethod: The specified finite difference method.\n\n\n\n\n\n","category":"function"},{"location":"pages/api/#FiniteDifferences.backward_fdm","page":"API","title":"FiniteDifferences.backward_fdm","text":"backward_fdm(\n    p::Int,\n    q::Int;\n    adapt::Int=1,\n    condition::Real=DEFAULT_CONDITION,\n    factor::Real=DEFAULT_FACTOR,\n    max_range::Real=Inf,\n    geom::Bool=false\n)\n\nContruct a finite difference method at a backward grid of p points.\n\nArguments\n\np::Int: Number of grid points.\nq::Int: Order of the derivative to estimate.\n\nKeywords\n\nadapt::Int=1: Use another finite difference method to estimate the magnitude of the   pth order derivative, which is important for the step size computation. Recurse   this procedure adapt times.\ncondition::Real: Condition number. See DEFAULT_CONDITION.\nfactor::Real: Factor number. See DEFAULT_FACTOR.\nmax_range::Real=Inf: Maximum distance that a function is evaluated from the input at   which the derivative is estimated.\ngeom::Bool: Use geometrically spaced points instead of linearly spaced points.\n\nReturns\n\nFiniteDifferenceMethod: The specified finite difference method.\n\n\n\n\n\n","category":"function"},{"location":"pages/api/#FiniteDifferences.extrapolate_fdm","page":"API","title":"FiniteDifferences.extrapolate_fdm","text":"extrapolate_fdm(\n    m::FiniteDifferenceMethod,\n    f::Function,\n    x::Real,\n    initial_step::Real=10,\n    power::Int=1,\n    breaktol::Real=Inf,\n    kw_args...\n) where T<:AbstractFloat\n\nUse Richardson extrapolation to extrapolate a finite difference method.\n\nTakes further in keyword arguments for Richardson.extrapolate. This method automatically sets power = 2 if m is symmetric and power = 1. Moreover, it defaults breaktol = Inf.\n\nArguments\n\nm::FiniteDifferenceMethod: Finite difference method to estimate the step size for.\nf::Function: Function to evaluate the derivative of.\nx::Real: Point to estimate the derivative at.\ninitial_step::Real=10: Initial step size.\n\nReturns\n\nTuple{<:AbstractFloat, <:AbstractFloat}: Estimate of the derivative and error.\n\n\n\n\n\n","category":"function"},{"location":"pages/api/#FiniteDifferences.assert_approx_equal","page":"API","title":"FiniteDifferences.assert_approx_equal","text":"assert_approx_equal(x, y, ε_abs, ε_rel[, desc])\n\nAssert that x is approximately equal to y.\n\nLet eps_z = eps_abs / eps_rel. Call x and y small if abs(x) < eps_z and abs(y) < eps_z, and call x and y large otherwise.  If this function returns True, then it is guaranteed that abs(x - y) < 2 eps_rel max(abs(x), abs(y)) if x and y are large, and abs(x - y) < 2 eps_abs if x and y are small.\n\nArguments\n\nx: First object to compare.\ny: Second object to compare.\nε_abs: Absolute tolerance.\nε_rel: Relative tolerance.\ndesc: Description of the comparison. Omit or set to false to have no description.\n\n\n\n\n\n","category":"function"},{"location":"pages/api/#FiniteDifferences.UnadaptedFiniteDifferenceMethod","page":"API","title":"FiniteDifferences.UnadaptedFiniteDifferenceMethod","text":"UnadaptedFiniteDifferenceMethod{P,Q} <: FiniteDifferenceMethod{P,Q}\n\nA finite difference method that estimates a Qth order derivative from P function evaluations. This method does not dynamically adapt its step size.\n\nFields\n\ngrid::SVector{P,Int}: Multiples of the step size that the function will be evaluated at.\ncoefs::SVector{P,Float64}: Coefficients corresponding to the grid functions that the   function evaluations will be weighted by.\ncoefs_neighbourhood::NTuple{3,SVector{P,Float64}}: Sets of coefficients used for   estimating the magnitude of the derivative in a neighbourhood.\nbound_estimator::FiniteDifferenceMethod: A finite difference method that is tuned to   perform adaptation for this finite difference method.\ncondition::Float64: Condition number. See See DEFAULT_CONDITION.\nfactor::Float64: Factor number. See See DEFAULT_FACTOR.\nmax_range::Float64: Maximum distance that a function is evaluated from the input at   which the derivative is estimated.\n∇f_magnitude_mult::Float64: Internally computed quantity.\nf_error_mult::Float64: Internally computed quantity.\n\n\n\n\n\n","category":"type"},{"location":"pages/api/#FiniteDifferences.AdaptedFiniteDifferenceMethod","page":"API","title":"FiniteDifferences.AdaptedFiniteDifferenceMethod","text":"AdaptedFiniteDifferenceMethod{\n    P, Q, E<:FiniteDifferenceMethod\n} <: FiniteDifferenceMethod{P,Q}\n\nA finite difference method that estimates a Qth order derivative from P function evaluations.\n\nThis method dynamically adapts its step size. The adaptation works by explicitly estimating the truncation error and round-off error, and choosing the step size to optimally balance those. The truncation error is given by the magnitude of the Pth order derivative, which will be estimated with another finite difference method (bound_estimator). This finite difference method, bound_estimator, will be tasked with estimating the Pth order derivative in a neighbourhood, not just at some x. To do this, it will use a careful reweighting of the function evaluations to estimate the Pth order derivative at, in the case of a central method, x - h, x, and x + h, where h is the step size. The coeffients for this estimate, the neighbourhood estimate, are given by the three sets of coeffients in bound_estimator.coefs_neighbourhood. The round-off error is estimated by the round-off error of the function evaluations performed by bound_estimator. The trunction error is amplified by condition, and the round-off error is amplified by factor. The quantities ∇f_magnitude_mult and f_error_mult are precomputed quantities that facilitate the step size adaptation procedure.\n\nFields\n\ngrid::SVector{P,Int}: Multiples of the step size that the function will be evaluated at.\ncoefs::SVector{P,Float64}: Coefficients corresponding to the grid functions that the   function evaluations will be weighted by.\ncoefs_neighbourhood::NTuple{3,SVector{P,Float64}}: Sets of coefficients used for   estimating the magnitude of the derivative in a neighbourhood.\ncondition::Float64: Condition number. See See DEFAULT_CONDITION.\nfactor::Float64: Factor number. See See DEFAULT_FACTOR.\nmax_range::Float64: Maximum distance that a function is evaluated from the input at   which the derivative is estimated.\n∇f_magnitude_mult::Float64: Internally computed quantity.\nf_error_mult::Float64: Internally computed quantity.\nbound_estimator::FiniteDifferenceMethod: A finite difference method that is tuned to   perform adaptation for this finite difference method.\n\n\n\n\n\n","category":"type"},{"location":"pages/api/#FiniteDifferences.DEFAULT_CONDITION","page":"API","title":"FiniteDifferences.DEFAULT_CONDITION","text":"FiniteDifferences.DEFAULT_CONDITION\n\nThe default value for the condition number of finite difference method. The condition number specifies the amplification of the ∞-norm when passed to the function's derivative.\n\n\n\n\n\n","category":"constant"},{"location":"pages/api/#FiniteDifferences.DEFAULT_FACTOR","page":"API","title":"FiniteDifferences.DEFAULT_FACTOR","text":"FiniteDifferences.DEFAULT_FACTOR\n\nThe default factor number. The factor number specifies the multiple to amplify the estimated round-off errors by.\n\n\n\n\n\n","category":"constant"},{"location":"pages/api/#Gradients","page":"API","title":"Gradients","text":"","category":"section"},{"location":"pages/api/","page":"API","title":"API","text":"grad\njacobian\njvp\nj′vp\nto_vec","category":"page"},{"location":"pages/api/#FiniteDifferences.grad","page":"API","title":"FiniteDifferences.grad","text":"grad(fdm, f, xs...)\n\nCompute the gradient of f for any xs for which to_vec is defined.\n\n\n\n\n\n","category":"function"},{"location":"pages/api/#FiniteDifferences.jacobian","page":"API","title":"FiniteDifferences.jacobian","text":"jacobian(fdm, f, x...)\n\nApproximate the Jacobian of f at x using fdm. Results will be returned as a Matrix{<:Real} of size(length(y_vec), length(x_vec)) where x_vec is the flattened version of x, and y_vec the flattened version of f(x...). Flattening performed by to_vec.\n\n\n\n\n\n","category":"function"},{"location":"pages/api/#FiniteDifferences.jvp","page":"API","title":"FiniteDifferences.jvp","text":"jvp(fdm, f, xẋs::Tuple{Any, Any}...)\n\nCompute a Jacobian-vector product with any types of arguments for which to_vec is defined. Each 2-Tuple in xẋs contains the value x and its tangent ẋ.\n\n\n\n\n\n","category":"function"},{"location":"pages/api/#FiniteDifferences.j′vp","page":"API","title":"FiniteDifferences.j′vp","text":"j′vp(fdm, f, ȳ, x...)\n\nCompute an adjoint with any types of arguments x for which to_vec is defined.\n\n\n\n\n\n","category":"function"},{"location":"pages/api/#FiniteDifferences.to_vec","page":"API","title":"FiniteDifferences.to_vec","text":"to_vec(x)\n\nTransform x into a Vector, and return the vector, and a closure which inverts the transformation.\n\n\n\n\n\n","category":"function"},{"location":"#FiniteDifferences.jl:-Finite-Difference-Methods","page":"Home","title":"FiniteDifferences.jl: Finite Difference Methods","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"(Image: CI) (Image: Build Status) (Image: codecov.io) (Image: PkgEval)","category":"page"},{"location":"","page":"Home","title":"Home","text":"(Image: Latest Docs) (Image: Code Style: Blue) (Image: ColPrac: Contributor's Guide on Collaborative Practices for Community Packages) (Image: DOI)","category":"page"},{"location":"","page":"Home","title":"Home","text":"FiniteDifferences.jl estimates derivatives with finite differences.","category":"page"},{"location":"","page":"Home","title":"Home","text":"See also the Python package FDM.","category":"page"},{"location":"#FiniteDiff.jl-vs-FiniteDifferences.jl","page":"Home","title":"FiniteDiff.jl vs FiniteDifferences.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"FiniteDiff.jl and FiniteDifferences.jl are similar libraries: both calculate approximate derivatives numerically. You should definately use one or the other, rather than the legacy Calculus.jl finite differencing, or reimplementing it yourself. At some point in the future they might merge, or one might depend on the other. Right now here are the differences:","category":"page"},{"location":"","page":"Home","title":"Home","text":"FiniteDifferences.jl supports basically any type, where as FiniteDiff.jl supports only array-ish types\nFiniteDifferences.jl supports higher order approximation and step size adaptation\nFiniteDiff.jl supports caching and in-place computation\nFiniteDiff.jl supports coloring vectors for efficient calculation of sparse Jacobians","category":"page"},{"location":"#FDM.jl","page":"Home","title":"FDM.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"This package was formerly called FDM.jl. We recommend users of FDM.jl update to FiniteDifferences.jl.","category":"page"},{"location":"#Contents","page":"Home","title":"Contents","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Scalar Derivatives\nDealing with Singularities\nDealing with Numerical Noise\nRichardson Extrapolation\nA Finite Difference Method on a Custom Grid\nMultivariate Derivatives","category":"page"},{"location":"#Scalar-Derivatives","page":"Home","title":"Scalar Derivatives","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Compute the first derivative of sin with a 5th order central method:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> central_fdm(5, 1)(sin, 1) - cos(1)\n-2.4313884239290928e-14","category":"page"},{"location":"","page":"Home","title":"Home","text":"Finite difference methods are optimised to minimise allocations:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> m = central_fdm(5, 1);\n\njulia> @benchmark $m(sin, 1)\nBenchmarkTools.Trial:\n  memory estimate:  0 bytes\n  allocs estimate:  0\n  --------------\n  minimum time:     486.621 ns (0.00% GC)\n  median time:      507.677 ns (0.00% GC)\n  mean time:        539.806 ns (0.00% GC)\n  maximum time:     1.352 μs (0.00% GC)\n  --------------\n  samples:          10000\n  evals/sample:     195","category":"page"},{"location":"","page":"Home","title":"Home","text":"Compute the second derivative of sin with a 5th order central method:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> central_fdm(5, 2)(sin, 1) - (-sin(1))\n-8.767431225464861e-11","category":"page"},{"location":"","page":"Home","title":"Home","text":"To obtain better accuracy, you can increase the order of the method:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> central_fdm(12, 2)(sin, 1) - (-sin(1))\n5.240252676230739e-14","category":"page"},{"location":"","page":"Home","title":"Home","text":"The functions forward_fdm and backward_fdm can be used to construct forward differences and backward differences respectively.","category":"page"},{"location":"#Dealing-with-Singularities","page":"Home","title":"Dealing with Singularities","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The function log(x) is only defined for x > 0. If we try to use central_fdm to estimate the derivative of log near x = 0, then we run into DomainErrors, because central_fdm happens to evaluate log at some x < 0.","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> central_fdm(5, 1)(log, 1e-3)\nERROR: DomainError with -0.02069596546590111","category":"page"},{"location":"","page":"Home","title":"Home","text":"To deal with this situation, you have two options.","category":"page"},{"location":"","page":"Home","title":"Home","text":"The first option is to use forward_fdm, which only evaluates log at inputs greater or equal to x:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> forward_fdm(5, 1)(log, 1e-3) - 1000\n-3.741856744454708e-7","category":"page"},{"location":"","page":"Home","title":"Home","text":"This works fine, but the downside is that you're restricted to one-sided methods (forward_fdm), which tend to perform worse than central methods (central_fdm).","category":"page"},{"location":"","page":"Home","title":"Home","text":"The second option is to limit the distance that the finite difference method is allowed to evaluate log away from x. Since x = 1e-3, a reasonable value for this limit is 9e-4:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> central_fdm(5, 1, max_range=9e-4)(log, 1e-3) - 1000\n-4.027924660476856e-10","category":"page"},{"location":"","page":"Home","title":"Home","text":"Another commonly encountered example is logdet, which is only defined for positive-definite matrices. Here you can use a forward method in combination with a positive-definite deviation from x:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> x = diagm([1.0, 2.0, 3.0]); v = Matrix(1.0I, 3, 3);\n\njulia> forward_fdm(5, 1)(ε -> logdet(x .+ ε .* v), 0) - sum(1 ./ diag(x))\n-4.222400207254395e-12","category":"page"},{"location":"","page":"Home","title":"Home","text":"A range-limited central method is also possible:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> central_fdm(5, 1, max_range=9e-1)(ε -> logdet(x .+ ε .* v), 0) - sum(1 ./ diag(x))\n-1.283417816466681e-13","category":"page"},{"location":"#Dealing-with-Numerical-Noise","page":"Home","title":"Dealing with Numerical Noise","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"It could be the case that the function f you'd like compute the derivative of suffers from numerical noise. For example, f(x) could be computed through some iterative procedure with some error tolerance ε. In such cases, finite difference estimates can fail catastrophically. To illustrate this, consider sin_noisy(x) = sin(x) * (1 + 1e-6 * randn()). Then","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> central_fdm(5, 1)(sin_noisy, 1) - cos(1)\n-0.027016678790599657","category":"page"},{"location":"","page":"Home","title":"Home","text":"which is a terrible performance. To deal with this, you can set the keyword argument factor, which specifies the level of numerical noise on the function evaluations relative to the machine epsilon. In this example, the relative error on the function evaluations is 2e-6 (1e-6 * randn() roughly produces a number in [-2e-6, 2e-6]) and the machine epsilon is eps(Float64) ≈ 2.22e-16, so factor = 2e-6 / 2e-16 = 1e10 should be appropriate:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> central_fdm(5, 1; factor=1e10)(sin_noisy, 1) - cos(1)\n-1.9243663490486895e-6","category":"page"},{"location":"","page":"Home","title":"Home","text":"As a rule of thumb, if you're dealing with numerical noise and Float64s, factor = 1e6 is not a bad first attempt.","category":"page"},{"location":"#Richardson-Extrapolation","page":"Home","title":"Richardson Extrapolation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The finite difference methods defined in this package can be extrapolated using Richardson extrapolation. This can offer superior numerical accuracy: Richardson extrapolation attempts polynomial extrapolation of the finite difference estimate as a function of the step size until a convergence criterion is reached.","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> extrapolate_fdm(central_fdm(2, 1), sin, 1)[1] - cos(1)\n1.6653345369377348e-14","category":"page"},{"location":"","page":"Home","title":"Home","text":"Similarly, you can estimate higher order derivatives:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> extrapolate_fdm(central_fdm(5, 4), sin, 1)[1] - sin(1)\n-1.626274487942503e-5","category":"page"},{"location":"","page":"Home","title":"Home","text":"In this case, the accuracy can be improved by making the contraction rate closer to 1:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> extrapolate_fdm(central_fdm(5, 4), sin, 1, contract=0.8)[1] - sin(1)\n2.0725743343774639e-10","category":"page"},{"location":"","page":"Home","title":"Home","text":"This performs similarly to a 10th order central method:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> central_fdm(10, 4)(sin, 1) - sin(1)\n-1.0301381969668455e-10","category":"page"},{"location":"","page":"Home","title":"Home","text":"If you really want, you can even extrapolate the 10th order central method, but that provides no further gains:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> extrapolate_fdm(central_fdm(10, 4), sin, 1, contract=0.8)[1] - sin(1)\n5.673617131662922e-10","category":"page"},{"location":"","page":"Home","title":"Home","text":"In this case, the central method can be pushed to a high order to obtain improved accuracy:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> central_fdm(20, 4)(sin, 1) - sin(1)\n-5.2513549064769904e-14","category":"page"},{"location":"#A-Finite-Difference-Method-on-a-Custom-Grid","page":"Home","title":"A Finite Difference Method on a Custom Grid","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"julia> method = FiniteDifferenceMethod([-2, 0, 5], 1)\nFiniteDifferenceMethod:\n  order of method:       3\n  order of derivative:   1\n  grid:                  [-2, 0, 5]\n  coefficients:          [-0.35714285714285715, 0.3, 0.05714285714285714]\n\njulia> method(sin, 1) - cos(1)\n-3.701483564100272e-13","category":"page"},{"location":"#Multivariate-Derivatives","page":"Home","title":"Multivariate Derivatives","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Consider a quadratic function:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> a = randn(3, 3); a = a * a'\n3×3 Matrix{Float64}:\n  4.31995    -2.80614   0.0829128\n -2.80614     3.91982   0.764388\n  0.0829128   0.764388  1.18055\n\njulia> f(x) = 0.5 * x' * a * x","category":"page"},{"location":"","page":"Home","title":"Home","text":"Compute the gradient:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> x = randn(3)\n3-element Vector{Float64}:\n -0.18563161988700727\n -0.4659836395595666\n  2.304584409826511\n\njulia> grad(central_fdm(5, 1), f, x)[1] - a * x\n3-element Vector{Float64}:\n  4.1744385725905886e-14\n -6.611378111642807e-14\n -8.615330671091215e-14","category":"page"},{"location":"","page":"Home","title":"Home","text":"Compute the Jacobian:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> jacobian(central_fdm(5, 1), f, x)[1] - (a * x)'\n1×3 Matrix{Float64}:\n 4.17444e-14  -6.61138e-14  -8.61533e-14","category":"page"},{"location":"","page":"Home","title":"Home","text":"The Jacobian can also be computed for non-scalar functions:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> a = randn(3, 3)\n3×3 Matrix{Float64}:\n  0.844846   1.04772    1.0173\n -0.867721   0.154146  -0.938077\n  1.34078   -0.630105  -1.13287\n\njulia> f(x) = a * x\n\njulia> jacobian(central_fdm(5, 1), f, x)[1] - a\n3×3 Matrix{Float64}:\n  2.91989e-14   1.77636e-15   4.996e-14\n -5.55112e-15  -7.63278e-15   2.4758e-14\n  4.66294e-15  -2.05391e-14  -1.04361e-14","category":"page"},{"location":"","page":"Home","title":"Home","text":"To compute Jacobian–vector products, use jvp and j′vp:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> v = randn(3)\n3-element Array{Float64,1}:\n -1.290782164377614\n -0.37701592844250903\n -1.4288108966380777\n\njulia> jvp(central_fdm(5, 1), f, (x, v)) - a * v\n3-element Vector{Float64}:\n -7.993605777301127e-15\n -8.881784197001252e-16\n -3.22519788653608e-14\n\njulia> j′vp(central_fdm(5, 1), f, x, v)[1] - a'x\n3-element Vector{Float64}:\n -2.1316282072803006e-14\n  2.4646951146678475e-14\n  6.661338147750939e-15","category":"page"}]
}
