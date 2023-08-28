---
sidebar_position: 4
id: stopsocketserver-method-intrepidcs-api
---

# StopSocketServer Method - intrepidcs API

This method starts the TCP/IP socket server at a specified port.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="cpp" label="C/C++ Declare" default>

```cpp
int _stdcall icsneoStopSockServer(int hObject);
```
</TabItem>

<TabItem value="vbnet" label="Visual Basic .NET Declare">

```vbnet
Public Declare Function icsneoStopSockServer Lib “icsneo40.dll” (ByVal hObject As Integer) As Integer
```
</TabItem>

<TabItem value="c#" label="C# Declare">

```csharp
[DllImport(“icsneo40.dll”)] public static extern int icsneoStopSockServer(int hObject);
```
</TabItem>
</Tabs>

**Parameters**

hObject

\[in] Handle to the driver object created by [OpenNeoDevice](../basic-functions-overview-intrepidcs-api/openneodevice-method-intrepidcs-api)

**Return Values**

If the server has been stopped successfully the return value will be 1. If the function fails the return value will be zero.

**Remarks**

This method should be called when the server created with [StartSocketServer](startsocketserver-method-intrepidcs-api).

### Examples

<Tabs>
<TabItem value="cpp" label="C/C++ Example" default>

```cpp
icsneoStopSockServer(hObject);
```
</TabItem>

<TabItem value="c#" label="C# Example">

```vbnet
bStatus = icsneoStopSockServer(m_hObject) '// stop the socket server
```
</TabItem>

<TabItem value="vbnet" label="Visual Basic .NET Example">

```csharp
iStatus = icsNeoDll.icsneoStopSockServer(m_hObject); // stop the socket server
```
</TabItem>
</Tabs>
