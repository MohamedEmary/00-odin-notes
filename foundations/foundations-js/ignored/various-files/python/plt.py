import numpy as np
import matplotlib.pyplot as plt
import scienceplots

plt.rcParams.update({'font.size': 16})
plt.style.use(['science', 'no-latex'])

x = np.linspace(-50, 30, num=150)
y = x**3-2*x










plt.plot(x, y)
plt.grid()
# don't forget to use 'label' in plt.plot for the legend
plt.legend()
plt.xlabel('$x$')
plt.ylabel('$x^3-2x$')
plt.title('$y = x^3-2x$')
# plt.savefig('fig.svg')
plt.show()
