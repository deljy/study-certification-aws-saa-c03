## `stress` CLI – Brief Overview
`stress` is a simple workload generator used to test system performance under load.

### Installation (on Ubuntu)
```bash
sudo apt install stress
```

### Basic usage
```
stress --cpu 2 --io 1 --vm 1 --vm-bytes 128M --timeout 10s
```

### Options
```--cpu N```: Spawn N CPU workers

```--io N```: Spawn N I/O workers

```--vm N```: Spawn N memory workers

```--vm-bytes SIZE```: Allocate SIZE memory per VM worker

```--timeout TIME```: Run stress test for TIME duration

### Example
```bash
stress --cpu 4 --timeout 30s
```
This stresses 4 CPU cores for 30 seconds.
⚠️ Use with caution — it can heavily load your system.
