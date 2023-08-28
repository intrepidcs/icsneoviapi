---
sidebar_position: 5
id: enablenetworkcom-method-intrepidcs-api
---

# EnableNetworkCom Method - intrepidcs API

**This function is deprecated. Use the EnableNetworkRXQueue method instead.**

**This method enables or disables all vehicle network rx data.**

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="cpp" label="C/C++ Declare" default>

```cpp
int _stdcall icsneoEnableNetworkCom(int hObject,int lEnable);
```
</TabItem>

<TabItem value="vbnet" label="Visual Basic .NET Declare">

```vbnet
Public Declare Function icsneoEnableNetworkCom Lib “icsneo40.dll” (ByVal hObject As Integer, ByVal lEnable As Integer) As Integer
```
</TabItem>

<TabItem value="c#" label="C# Declare">

```csharp
[DllImport(“icsneo40.dll”)] public static extern int icsneoEnableNetworkCom(int hObject, int lEnable);
```
</TabItem>
</Tabs>

**Parameters**

lEnable

\[in] When 1 it will enable network receive. When 0 it will disable network receive.

**Return Values**

This function returns the 1 when successful. 0 if otherwise.

**Remarks**

This function will enable and disable network traffic for all client applications connected to the neoVI. The icsneoEnableNetworkRXQueue function can be used to enable and disable the receive message queue for individual applications.

### Examples

<Tabs>
<TabItem value="cpp" label="C/C++ Example" default>

```cpp
icsneoEnableNetworkCom(m_hObject,0);
```
</TabItem>

<TabItem value="c#" label="C# Example">

```csharp
icsNeoDll.icsneoEnableNetworkCom(m_hObject,0);
```
</TabItem>

<TabItem value="vbnet" label="Visual Basic .NET Example">

```vbnet
Call icsneoEnableNetworkCom(m_hObject, 0)
```
</TabItem>
</Tabs>