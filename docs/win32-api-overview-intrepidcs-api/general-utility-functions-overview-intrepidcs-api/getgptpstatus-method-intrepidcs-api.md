---
sidebar_position: 8
id: getgptpstatus-method-intrepidcs-api
---

# GetGPTPStatus Method - intrepidcs API

This method sets bit rates for networks on neoVI devices&#x20;

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="cpp" label="C/C++ Declare" default>

```cpp
int _stdcall icsneoGetGPTPStatus(void * hObject,  GPTPStatus * StatusGPTP);
```
</TabItem>

<TabItem value="vbnet" label="Visual Basic .NET Declare">

```vbnet
Public Declare Function icsneoGetGPTPStatus Lib "icsneo40.dll" (ByVal hObject As IntPtr, ByRef StatusGPTP As GPTPStatus) As Int32
```
</TabItem>

<TabItem value="c#" label="C# Declare">

```csharp
[DllImport("icsneo40.dll")]
public static extern Int32 icsneoGetGPTPStatus(IntPtr hObject,ref GPTPStatus StatusGPTP);
```
</TabItem>
</Tabs>

**Parameters**

_hObject_ <br/>
__    \[in] Specifies the driver object created by OpenNeoDevice.

_gptpStatus_ <br/>
\[out] The address of a GPTPStatus structure.

**Return Values**

1 if the function succeeded. 0 if it failed for any reason. GetLastAPIError must be called to obtain the specific error.  Failure could include the device not supporting gPTP, or <br/>
the device supports gPTP but not support icsneoGetGPTPStatus API.

**Remarks**

Rad Galaxy, Rad SuperMoon, Rad Star2, and Rad GigaStar supports icsneoGetGPTPStatus API\
nEAT, Rad Pluto, Rad Jupiter support gPTP but, does not support this API

### **Examples**

<Tabs>
<TabItem value="cpp" label="C/C++ Example" default>

```cpp
GPTPStatus gptp_status = {};
int iResult; 
iResult = icsneoGetGPTPStatus(m_hObject, &gptp_status);
```
</TabItem>

<TabItem value="c#" label="C# Example">

```csharp
GPTPStatus gptp_status = new  GPTPStatus();
int iResult;

iResult = icsNeoDll.icsneoGetGPTPStatus(m_hObject,ref gptp_status);
```
</TabItem>

<TabItem value="vbnet" label="Visual Basic .NET Example">

```vbnet
Dim gptp_status As New GPTPStatus
Dim iResult As Int32

iResult = icsneoGetGPTPStatus(m_hObject, gptp_status)
```
</TabItem>
</Tabs>
