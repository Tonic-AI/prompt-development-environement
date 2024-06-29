:: scripts/initialize.bat
@echo off
setlocal

:: Define the required Python version and installer details
set "REQUIRED_PYTHON_VERSION=3.9.13"
set "PYTHON_INSTALLER_FILENAME=python-%REQUIRED_PYTHON_VERSION%-amd64.exe"
set "PYTHON_INSTALLER_URL=https://www.python.org/ftp/python/%REQUIRED_PYTHON_VERSION%/%PYTHON_INSTALLER_FILENAME%"
set "PYTHON_INSTALL_DIR=%USERPROFILE%\.betterprompts\python"
set "INSTALLATION_ERROR=0"

call :check_python_installation
if %ERRORLEVEL% NEQ 0 call :install_python
if %INSTALLATION_ERROR% NEQ 0 goto :eof

:: Add Python Scripts to PATH after installation
set "PATH=%PYTHON_INSTALL_DIR%\Scripts;%PATH%"

call :create_directories
if %INSTALLATION_ERROR% NEQ 0 goto :eof

call :setup_virtual_environment
if %INSTALLATION_ERROR% NEQ 0 goto :eof

call :install_poetry
if %INSTALLATION_ERROR% NEQ 0 goto :eof

:: Confirm completion of the setup
echo Python environment setup for 'better-prompts' is complete.
goto :eof

:: Subroutine for checking Python installation
:check_python_installation
echo Checking for Python installation...
for /f "tokens=2" %%i in ('"%PYTHON_INSTALL_DIR%\python.exe" --version 2^>^&1') do set PYTHON_VERSION=%%i
if not defined PYTHON_VERSION (
    echo Python is not installed. Please install Python before running this script.
    exit /b 1
)
if not "%PYTHON_VERSION%"=="%REQUIRED_PYTHON_VERSION%" (
    echo Required Python %REQUIRED_PYTHON_VERSION% is not installed.
    exit /b 1
)
echo Found Python %REQUIRED_PYTHON_VERSION% installed.
exit /b 0

:: Subroutine for installing Python if not present
:install_python
echo Installing Python %REQUIRED_PYTHON_VERSION%...
set "PYTHON_INSTALL_DIR=%USERPROFILE%\.betterprompts\python"
echo Installation directory: "%PYTHON_INSTALL_DIR%"
if not exist "%PYTHON_INSTALL_DIR%" (
    mkdir "%PYTHON_INSTALL_DIR%"
)
echo Downloading Python %REQUIRED_PYTHON_VERSION%...
curl -o "%PYTHON_INSTALL_DIR%\%PYTHON_INSTALLER_FILENAME%" %PYTHON_INSTALLER_URL%
echo Running Python %REQUIRED_PYTHON_VERSION% installer...
start /wait "" "%PYTHON_INSTALL_DIR%\%PYTHON_INSTALLER_FILENAME%" InstallAllUsers=0 PrependPath=1 TargetDir="%PYTHON_INSTALL_DIR%"
if not exist "%PYTHON_INSTALL_DIR%\python.exe" (
    echo Installation cancelled by the user or failed. Please run the installer again.
    set "INSTALLATION_ERROR=1"
    exit /b 1
)
echo Python %REQUIRED_PYTHON_VERSION% has been installed.
set "PATH=%PYTHON_INSTALL_DIR%\Scripts;%PATH%"
echo Retrieving Python installation information...
"%PYTHON_INSTALL_DIR%\python.exe" -m site
call :check_python_installation
if %ERRORLEVEL% NEQ 0 (
    echo Verification failed. Python may not have been installed correctly.
    exit /b 1
)
echo Verification successful. Python is callable from the installation directory.
exit /b 0

:: Subroutine for creating directories
:create_directories
set "BETTERPROMPTS_DIR=.betterprompts"
set "BETTERPROMPTS_PATH=%USERPROFILE%\%BETTERPROMPTS_DIR%"
if not exist "%BETTERPROMPTS_PATH%" (
    echo Creating directory "%BETTERPROMPTS_PATH%"...
    mkdir "%BETTERPROMPTS_PATH%"
)
goto :eof

:: Subroutine for setting up the virtual environment
:setup_virtual_environment
set "VENV_DIR=venv\core-gui"
set "VENV_PATH=%BETTERPROMPTS_PATH%\%VENV_DIR%"
if not exist "%VENV_PATH%" (
    echo Creating a virtual environment at "%VENV_PATH%"...
    "%PYTHON_INSTALL_DIR%\python.exe" -m venv "%VENV_PATH%"
) else (
    echo Virtual environment found at "%VENV_PATH%".
)
echo Activating the virtual environment...
call "%VENV_PATH%\Scripts\activate.bat"
echo Virtual environment activated at "%VENV_PATH%".
echo Upgrading pip in the virtual environment to the latest version...
"%VENV_PATH%\Scripts\python.exe" -m pip install --upgrade pip
if %ERRORLEVEL% NEQ 0 (
    echo Failed to upgrade pip in the virtual environment. Please check your installation and try again.
    exit /b 1
)
echo pip in the virtual environment has been upgraded to the latest version.
goto :eof

:: Subroutine for installing Poetry
:install_poetry
"%VENV_PATH%\Scripts\poetry.exe" --version >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo Installing Poetry...
    "%VENV_PATH%\Scripts\pip.exe" install poetry
) else (
    echo Poetry is already installed.
)
goto :eof

:: End of the script
endlocal
