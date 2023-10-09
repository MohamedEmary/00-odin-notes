import matplotlib.pyplot as plt
import numpy as np

x = np.arange(-5, 5, 0.1)
y = x**2

plt.style.use('seaborn-paper')

fig, ax = plt.subplots(figsize=(6, 4))
ax.plot(x, y, linewidth=2, color='dodgerblue')

ax.set_title('$f(x) = x^2$', fontsize=18)
ax.set_xlabel('$x$', fontsize=14)
ax.set_ylabel('$f(x)$', fontsize=14)

ax.tick_params(axis='both', which='major', labelsize=12)

fig.tight_layout()

plt.savefig('x_squared.pdf')
