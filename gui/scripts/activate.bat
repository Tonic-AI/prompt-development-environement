:: scripts/activate.bat
@echo off
setlocal

:: Check for help argument or no arguments
if "%~1"=="" goto :help
if /I "%~1"=="--help" goto :help
if /I not "%~1"=="--env" goto :help

:: Extract the environment name from the argument
set "VENV_NAME=%~2"
set "BETTERPROMPTS_PATH=%USERPROFILE%\.betterprompts"
set "VENV_DIR=venv"
set "VENV_PATH=%BETTERPROMPTS_PATH%\%VENV_DIR%\%VENV_NAME%"

call :create_venv
call :activate_venv
call :display_python_info
call :display_venv_info
goto :eof

:create_venv
if not exist "%VENV_PATH%" (
    echo Creating a virtual environment for %VENV_NAME%...
    python -m venv "%VENV_PATH%"
    if %ERRORLEVEL% NEQ 0 (
        echo Failed to create a virtual environment for %VENV_NAME%.
        exit /b 1
    )
)
exit /b 0

:activate_venv
echo Activating the virtual environment for %VENV_NAME%...
call "%VENV_PATH%\Scripts\activate.bat"
if %ERRORLEVEL% NEQ 0 (
    echo Failed to activate the virtual environment for %VENV_NAME%.
    exit /b 1
)
echo Virtual environment for %VENV_NAME% activated.
exit /b 0

:display_python_info
"%VENV_PATH%\Scripts\python.exe" --version
"%VENV_PATH%\Scripts\python.exe" -m site
if %ERRORLEVEL% NEQ 0 (
    echo Failed to display Python version and site information.
    exit /b 1
)
exit /b 0

:display_venv_info
echo Virtual Environment Information:
echo   - Name: %VENV_NAME%
echo   - Path: %VENV_PATH%
echo   - Python Executable: "%VENV_PATH%\Scripts\python.exe"
echo   - Site-packages Directory: "%VENV_PATH%\Lib\site-packages"
exit /b 0

:help
echo.
echo Usage:
echo   activate.bat --env [environment-name] : Activates the specified virtual environment.
echo   activate.bat --help                   : Displays this help message.
echo.
exit /b 0

:: End of the script
endlocal
