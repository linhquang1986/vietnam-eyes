sudo apt-get update && sudo apt-get upgrade && sudo rpi-update
# Skip this step if you don't use raspberry
sudo nano /etc/dphys-swapfile
#CONF_SWAPSIZE=100
 CONF_SWAPSIZE=2048
# Install packages
PACKAGES="build-essential cmake pkg-config libjpeg-dev libtiff5-dev libjasper-dev libpng12-dev libavcodec-dev libavformat-dev libswscale-dev libv4l-dev libxvidcore-dev libx264-dev libgtk2.0-dev libatlas-base-dev gfortran"
sudo apt-get install $PACKAGES -y
sudo apt-get install python3-dev
sudo apt-get install python3-pip
cd ~
# Download opencv 3.4.5
wget -O opencv.zip https://github.com/Itseez/opencv/archive/3.4.5.zip
unzip opencv.zip
# Download opencv_contrib
wget -O opencv_contrib.zip https://github.com/Itseez/opencv_contrib/archive/3.4.5.zip
unzip opencv_contrib.zip
# Delete download files
sudo rm opencv.zip opencv_contrib.zip
wget https://bootstrap.pypa.io/get-pip.py
sudo python3 get-pip.py
sudo apt-get install python3-pip
pip3 install numpy
# Setup opencv
cd ~/opencv-3.4.1/
mkdir build
cd build
cmake -D CMAKE_BUILD_TYPE=RELEASE \
    -D CMAKE_INSTALL_PREFIX=/usr/local \
    -D INSTALL_C_EXAMPLES=ON \
    -D INSTALL_PYTHON_EXAMPLES=ON \
    -D OPENCV_EXTRA_MODULES_PATH=~/opencv_contrib-3.4.5/modules \
    -D BUILD_EXAMPLES=ON ..
make -j4
sudo make install
sudo ldconfig