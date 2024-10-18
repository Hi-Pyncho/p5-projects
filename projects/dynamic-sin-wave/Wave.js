class Wave {
  constructor(amplitude, period, phase) {
    this.amplitude = amplitude;
    this.period = period;
    this.phase = phase;
  }

  calc(x) {
    return sin(this.phase + TWO_PI * x / this.period) * this.amplitude;
  }
}
