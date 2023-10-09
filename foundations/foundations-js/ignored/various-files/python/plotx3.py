import matplotlib.pyplot as plt
import numpy as np
import scienceplots
plt.style.use(['science', 'no-latex'])
# adjust the fontsize
plt.rcParams.update({'font.size': 16})

x = np.linspace(-5, 10, 200)

y = x**3

fig = plt.figure()
ax = fig.add_subplot(1, 1, 1)

# spine placement data centered
ax.spines['left'].set_position(('data', 0.0))
ax.spines['bottom'].set_position(('data', 0.0))
ax.spines['right'].set_color('none')
ax.spines['top'].set_color('none')

# fig = plt.figure()
# ax = fig.add_subplot(1, 1, 1)


plt.plot(x, y, label="$x^3$")
plt.title("$y = x^3$")
plt.grid()
plt.legend()
plt.xlabel("$x$")
plt.ylabel("$x^3$")
plt.title("Function: $y = x^3$")
plt.show()


""" # Move left y-axis and bottom x-axis to centre, passing through (0,0)
ax.spines['left'].set_position('center')
ax.spines['bottom'].set_position('center')

# Eliminate upper and right axes
ax.spines['right'].set_color('none')
ax.spines['top'].set_color('none')

# Show ticks in the left and lower axes only
ax.xaxis.set_ticks_position('bottom')
ax.yaxis.set_ticks_position('left')

plt.axhline(color="black")
plt.axvline(color="black")
 """



