import matplotlib.pyplot as plt
import numpy as np
import scienceplots

plt.rcParams.update({'font.size': 18})
plt.style.use(['science', 'no-latex'])
x = np.linspace(-3, 3, num=100)
y = x**3-10*x

plt.plot(x, y, label="function")

fig = plt.figure()
ax = fig.add_subplot(1, 1, 1)
# spine placement data centered
ax.spines['left'].set_position(('data', 0.0))
ax.spines['bottom'].set_position(('data', 0.0))
ax.spines['right'].set_color('none')
ax.spines['top'].set_color('none')

plt.grid()
# don't forget to use 'label' in plt.plot for the legend
plt.legend()
plt.xlabel('$x$')
plt.ylabel('$x^3-10x$')
plt.title('$y = x^3-10x$')
# plt.savefig('fig.svg')
# plt.show()

fig.show()
