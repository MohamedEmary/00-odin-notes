import matplotlib.pyplot as plt
import numpy as np

# plt.style.use(['science', 'notebook', 'grid'])

# using LaTeX with rcParams
plt.rcParams.update({
    "text.usetex": True,
    "font.family": "serif",
    "font.serif": ["Palatino"],
})

x = np.linspace(0, 15, num=30)
y = np.sin(x) + 0.05*np.random.randn(len(x))

x2 = np.linspace(0, 15, 150)
y2 = np.sin(x2)

plt.plot(x, y, 'o', label='Data', zorder=100)
plt.plot(x2, y2, "red", label="function")

# plt.xlabel("")
# plt.ylabel("")

plt.legend()
plt.grid()

# plt.savefig("fig.svg")
plt.show()
