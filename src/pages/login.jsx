"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import "../styles/auth.css"

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const validateForm = () => {
        const newErrors = {}
        if (!formData.email) newErrors.email = "Email is required"
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid"

        if (!formData.password) newErrors.password = "Password is required"

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (validateForm()) {
            setIsLoading(true)
            try {
                // Replace with your actual login API call
                console.log("Logging in with:", formData)
                // Simulate API call
                await new Promise((resolve) => setTimeout(resolve, 1000))

                // Handle successful login
                alert("Login successful!")
                // Redirect to dashboard or home page
            } catch (error) {
                console.error("Login failed:", error)
                setErrors({ form: "Invalid email or password" })
            } finally {
                setIsLoading(false)
            }
        }
    }

    return (
        <div className="auth-container">
            <div className="auth-form-container">
                <h1>Welcome Back</h1>
                <p className="auth-subtitle">Please enter your details to sign in</p>

                {errors.form && <div className="error-message">{errors.form}</div>}

                <form onSubmit={handleSubmit} className="auth-form">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className={errors.email ? "input-error" : ""}
                        />
                        {errors.email && <span className="error-text">{errors.email}</span>}
                    </div>

                    <div className="form-group">
                        <div className="password-label-row">
                            <label htmlFor="password">Password</label>
                            <Link to="/forgot-password" className="forgot-password">
                                Forgot password?
                            </Link>
                        </div>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            className={errors.password ? "input-error" : ""}
                        />
                        {errors.password && <span className="error-text">{errors.password}</span>}
                    </div>

                    <button type="submit" className="auth-button" disabled={isLoading}>
                        {isLoading ? "Signing in..." : "Sign in"}
                    </button>

                    <div className="auth-divider">
                        <span>OR</span>
                    </div>

                    <button type="button" className="social-auth-button">
                        <img src="/google-icon.svg" alt="Google" className="social-icon" />
                        Sign in with Google
                    </button>
                </form>

                <p className="auth-redirect">
                    Don't have an account?{" "}
                    <Link to="/signup" className="auth-link">
                        Sign up
                    </Link>
                </p>
            </div>

            <div className="auth-image">
                <img src="/google-icon.svg" alt="Login" />
            </div>
        </div>
    )
}

export default Login

