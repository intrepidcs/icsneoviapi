---
sidebar_position: 1
id: iso15765_enablenetworks-method-intrepidcs-api
---

# ISO15765_EnableNetworks Method - intrepidcs API

This method enables the use of ISO15765-2 on a CAN network. icsneoISO15765\_EnableNetwroks must be called before using icsneoISO15765\_TransmitMessage or icsneoISO15765\_ReceiveMessage.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="cpp" label="C/C++ Declare" default>

```cpp
void _stdcall icsneoISO15765_EnableNetworks(void * hObject, unsigned int iNetwork);
```
</TabItem>

<TabItem value="vbnet" label="Visual Basic .NET Declare">

```vbnet
Public Declare Function icsneoISO15765_EnableNetworks Lib “icsneo40.dll” (ByVal hObject As IntPtr, ByVal Network As UInt32) As Int32
```
</TabItem>

<TabItem value="c#" label="C# Declare">

```csharp
[DllImport(“icsneo40.dll”)]
public static extern Int32 icsneoISO15765_EnableNetworks (IntPtr hObject, UInt32 Network);
```
</TabItem>
</Tabs>

**Parameters**

hObject

\[in] Handle which specifies the driver object created with the OpenPort method.

lNetwork

\[in] Specifies which CAN network the status is requested for. Can be one of the following values:

| Network  | Value |
| -------- | ----- |
| HS CAN   | 1     |
| MS CAN   | 2     |
| HS CAN 2 | 4     |
| HS CAN 3 | 8     |
| SW CAN   | 16    |
| HS CAN 4 | 20    |
| HS CAN 5 | 24    |
| HS CAN 6 | 28    |
| HS CAN 7 | 32    |
| SW CAN 2 | 36    |

**Return Values**

None.

**Remarks**

None.

### Examples

<Tabs>
<TabItem value="cpp" label="C/C++ Example" default>

```cpp
lResult = icsneoISO15765_EnableNetworks(m_hObject,NETID_HSCAN);
```
</TabItem>

<TabItem value="c#" label="C# Example">

```csharp
lResult = icsNeoDll.icsneoISO15765_EnableNetworks(m_hObject,(int)eNETWORK_ID.NETID_HSCAN);
```
</TabItem>

<TabItem value="vbnet" label="Visual Basic .NET Example">

```vbnet
lResult = icsneoISO15765_EnableNetworks(m_hObject, NETID_HSCAN)
```
</TabItem>
</Tabs>