---
sidebar_position: 2
id: getdllversion-method-intrepidcs-api
---

# GetDLLVersion Method - intrepidcs API

This method returns the software version of the DLL.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="cpp" label="C/C++ Declare" default>

```cpp
int _stdcall icsneoGetDLLVersion();
```
</TabItem>

<TabItem value="vbnet" label="Visual Basic .NET Declare">

```vbnet
Public Declare Function icsneoGetDLLVersion Lib “icsneo40.dll” () As Integer
```
</TabItem>

<TabItem value="c#" label="C# Declare">

```csharp
[DllImport(“icsneo40.dll”)] public static extern int icsneoGetDLLVersion();
```
</TabItem>
</Tabs>

**Parameters**

None.

**Return Values**

This function returns the version number of the API.

**Remarks**

None.

### Examples

<Tabs>
<TabItem value="cpp" label="C/C++ Example" default>

```cpp
char szOut[200];

// get the DLL version and report it
wsprintf(szOut,TEXT("intrepidcs API DLL Version %d\n"), icsneoGetDLLVersion());
MessageBox(hWnd,szOut,TEXT("Message"),MB_ICONINFORMATION);
```
</TabItem>

<TabItem value="c#" label="C# Example">

```csharp
'// get the DLL version information and place in Button text
Button1.Text = "Version " + Convert.ToString(icsNeoDll.icsneoGetDLLVersion());
```
</TabItem>

<TabItem value="vbnet" label="Visual Basic .NET Example">

```vbnet
'// get the DLL version information and place in Button text
Button1.Text = "Version " + Convert.ToString(icsneoGetDLLVersion)
```
</TabItem>
</Tabs>
