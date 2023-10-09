# def sum(num1, num2, num3):
#     return num1 + num2+num3


# print(sum(2, 2, 5), sep="s")


import numpy as np
import matplotlib.pyplot as plt
import scienceplots

plt.style.use(['science', 'no-latex'])


# # using LaTeX via rcparam
# plt.rcParams['text.usetex'] = True
# plt.rcParams.update({
#     # using LaTeX with rcParams
#     "text.usetex": True,
#     "font.family": "serif",
#     "font.serif": ["Palatino"],
#     "font.size": 12,
#     # equation font size
#     "axes.labelsize": 18,
#     # axis label font size
#     "axes.titlesize": 18,
# # title font size
# "xtick.labelsize": 16,
# # x axis tick label size
# "ytick.labelsize": 16,
# # y axis tick label size
# "legend.fontsize": 16,
# # legend font size
# "figure.titlesize": 18,
# # figure title size
# "lines.linewidth": 2.0,
# # line width
# "lines.markersize": 8.0,
# # marker size
# "grid.linewidth": 1.0,
# # grid line width
# "grid.linestyle": ":",
# # grid line style
# "grid.color": "0.5",
# # grid color
# "axes.grid": True,
# # display grid or not
# "savefig.dpi": 300,
# # save figure dots per inch
# "savefig.format": "svg",
# # save figure file format
# "savefig.transparent": True,
# # transparent background
# "figure.figsize": [8, 6],
# # figure size
# "figure.subplot.left": 0.15,
# # figure subplot left margin
# "figure.subplot.right": 0.95,
# # figure subplot right margin
# "figure.subplot.bottom": 0.15,
# # figure subplot bottom margin
# "figure.subplot.top": 0.9,
# # figure subplot top margin
# "figure.subplot.wspace": 0.2,
# # figure subplot width space
# "figure.subplot.hspace": 0.2,
# # figure subplot height space
# "figure.edgecolor": "0.0",
# })

# x1 = np.linspace(-10, 10, 200)
# y1 = np.sin(x1)

# x2 = np.linspace(-10, 10, 30)
# y2 = np.sin(x2) + 0.07*np.random.randn(len(x2))

# plt.plot(x1, y1)
# # zorder=100 to plot the data on top of the function
# plt.plot(x2, y2, 'o', label='data', zorder=100)
# plt.show()

plt.rcParams.update({'font.size': 15,
                     #  'legend.fontsize': 16,
                     #  'axes.labelsize': 16,
                     #  'axes.titlesize': 16,
                     #  'xtick.labelsize': 16,
                     #  'ytick.labelsize': 16
                     })

x = np.linspace(-10, 10, 200)
y = x**2

x1 = np.linspace(-9.7, 9.7, 30)
y1 = x1**2 + 2*np.random.randn(len(x1))

plt.figure(figsize=(8, 5))
plt.plot(x, y)
plt.plot(x1, y1, 'o', color="red")
plt.xlabel("$x$")
plt.ylabel("$x^2$")
plt.title("Function: $y = x^2$")
# Change the font size of title, axis labels, and legend
plt.grid()
plt.show()
