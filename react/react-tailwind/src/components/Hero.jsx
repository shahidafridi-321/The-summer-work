// src/components/Hero.js

function Hero() {
  return (
    <section className="relative bg-cover bg-center py-20 text-center text-white" style={{ backgroundImage: 'url("https://via.placeholder.com/1500x600")' }}>
      <h1 className="text-4xl font-bold">Welcome to Our Store</h1>
      <p className="mt-4 text-lg">Find the best products at unbeatable prices</p>
      <button className="mt-8 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
        Shop Now
      </button>
    </section>
  );
}

export default Hero;
