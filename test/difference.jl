using FiniteDifferences: rand_tangent, difference

@testset "difference" begin

    @testset "Primal: $(typeof(x))" for (ε, x) in [

        # Test things that don't have tangents.
        (randn(), :a),
        (randn(), 'a'),
        (randn(), "a"),
        (randn(), 0),

        # Test Numbers.
        (randn(Float32), randn(Float32)),
        (randn(Float64), randn(Float64)),
        (randn(Float32), randn(ComplexF32)),
        (randn(Float64), randn(ComplexF64)),

        # Test StridedArrays.
        (randn(), randn(5)),
        (randn(Float32), randn(ComplexF32, 5, 2)),
        (randn(), [randn(1) for _ in 1:3]),
        (randn(), [randn(5, 4), "a"]),

        # Tuples.
        (randn(), (randn(5, 2), )),
        (randn(), (randn(), 4)),
        (randn(), (4, 3, 2)),

        # NamedTuples.
        (randn(), (a=randn(5, 2),)),
        (randn(), (a=randn(), b=4)),
        (randn(), (a=4, b=3, c=2)),

        # Arbitrary structs.
        (randn(), sin),
        (randn(), cos),
        (randn(), Foo(5.0, 4, randn(5, 2))),
        (randn(), Foo(randn(), 1, Foo(randn(), 1, 1))),

        # LinearAlgebra types (also just structs).
        (randn(), UpperTriangular(randn(2, 2))),
        (randn(), Diagonal(randn(4))),
        (randn(), SVector{2, Float64}(1.0, 2.0)),
        (randn(), SMatrix{2, 2, ComplexF64}(1.0, 2.0, 3.0, 4.0)),
        (randn(), Symmetric(randn(2, 2))),
        (randn(), Hermitian(randn(ComplexF64, 1, 1))),
        (randn(), Adjoint(randn(ComplexF64, 3, 3))),
        (randn(), Transpose(randn(3))),
    ]
        # Construct a value that should be equal to the difference and check that it is
        dx = rand_tangent(x)
        y = x + ε * dx
        dx_diff = difference(ε, y, x)

        if x isa AbstractArray{<:Number} || x isa Number
            @test x + dx ≈ x + dx_diff
        else
            #  hard to check value if don't overload `≈` so for now we  just check type
            @test typeof(dx) == typeof(dx_diff)
        end
    end

    # Ensure struct fallback errors for non-struct types.
    @test_throws ArgumentError invoke(difference, Tuple{Float64, T, T} where {T}, 5.0, 5.0, 5.0)
end
