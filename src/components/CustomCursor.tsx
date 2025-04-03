@keyframes fire-core {
  0%, 100% {
    filter: blur(2px) brightness(1);
    box-shadow: 0 0 10px 2px rgba(255, 100, 0, 0.8);
  }
  50% {
    filter: blur(3px) brightness(1.2);
    box-shadow: 0 0 15px 5px rgba(255, 80, 0, 0.9);
  }
}

@keyframes fire-glow {
  0%, 100% {
    box-shadow: 0 0 15px 5px rgba(255, 100, 0, 0.3);
  }
  50% {
    box-shadow: 0 0 20px 8px rgba(255, 80, 0, 0.4);
  }
}

.animate-fire-core {
  animation: fire-core 0.5s infinite alternate;
}

.animate-fire-glow {
  animation: fire-glow 0.8s infinite alternate;
}
