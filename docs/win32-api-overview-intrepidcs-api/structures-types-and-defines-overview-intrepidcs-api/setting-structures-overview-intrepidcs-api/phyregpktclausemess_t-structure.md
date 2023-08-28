---
sidebar_position: 26
id: phyregpktclausemess_t-structure
---

# PhyRegPktClauseMess_t Structure

Structure for reading PHY information from a hardware device

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="cpp" label="C/C++ Declare 1" default>

```cpp
typedef struct __declspec (align(8))
{
  uint16_t Flags;
  PhyRegPktClauseMess_t ClausePkt;
}PhyRegPkt_t;
```
</TabItem>

<TabItem value="cpp1" label="C/C++ Declare 2" default>

```cpp
typedef struct __declspec (align(8))
{
  unsigned char phyAddrOrPort;
  unsigned char pageOrDevice;
  unsigned short regAddr;
  unsigned short regVal;
}PhyRegPktClauseMess_t;
```
</TabItem>
<TabItem value="vbnet" label="Visual Basic .NET Declare 1">

```vbnet
<StructLayout(LayoutKind.Sequential, Pack:=8)> Public Structure PhyRegPkt_t
  Dim Flags As UInt16
  Dim ClausePkt As PhyRegPktClauseMess_t
End Structure
```
</TabItem>
<TabItem value="vbnet1" label="Visual Basic .NET Declare 2">

```vbnet
<StructLayout(LayoutKind.Sequential, Pack:=8)> Public Structure PhyRegPktClauseMess_t
  Dim phyAddrOrPort As Byte
  Dim pageOrDevice As Byte
  Dim regAddr As UInt16
  Dim regVal As UInt16
End Structure
```
</TabItem>

<TabItem value="c#" label="C# Declare 1">

```csharp
[StructLayout(LayoutKind.Sequential,Pack=8)]
public struct PhyRegPkt_t
{
  public UInt16 Flags;
  public PhyRegPktClauseMess_t ClausePkt;
}
```
</TabItem>

<TabItem value="c#1" label="C# Declare 2">

```csharp
[StructLayout(LayoutKind.Sequential,Pack=8)]
public struct PhyRegPktClauseMess_t
{
  public byte phyAddrOrPort;
  public byte pageOrDevice;
  public UInt16 regAddr;
  public UInt16 regVal;
}
```
</TabItem>
</Tabs>

**Remarks**

| Item PhyRegPkt\_t | Description                                                                                                                                                     |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Flags             | <p>Bitfield for direction and data type</p><p>Bit 0: 1=Enabled, 0=Disable</p><p>Bit 1: 1=Enable Write, 0=Read</p><p>Bit 2: 1=Use Clause 45, 0=Use Clause 22</p> |
| ClausePkt         | See PhyRegPktClauseMess\_t structure                                                                                                                            |

#

| Item PhyRegPktClauseMess\_t | Description                                               |
| --------------------------- | --------------------------------------------------------- |
| phyAddrOrPort               | Set the Address for Clause 22 Sets the Port for Clause 45 |
| pageOrDevice                | Set the Page for Clause 22 Sets the Device for Clause 45  |
| regAddr                     | Sets the Register Address                                 |
| regVal                      | Holds the Value to Set or read back                       |
