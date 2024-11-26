FROM rust:1.71

# Set the working directory
WORKDIR /code/app

# Copy Cargo files first to utilize Docker caching
COPY ./Cargo.toml ./Cargo.lock ./

# Create the app directory and copy the source code
COPY ./src ./src

# Build the application
RUN cargo build --release

# Command to run the application
CMD ["cargo", "run"]