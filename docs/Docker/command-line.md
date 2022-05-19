# Docker 常用 command line

```shell
docker images # 查看本機所有 images
docker ps -a # 列出所有容器

```

## Docker ps 命令

```shell
docker ps [option] # 列出所有容器
```

```shell
# option 
-a ：顯示所有的容器，包括未運行的。
-f ：根據條件過濾顯示的內容。
--format : 指定返回值的模板文件。
-l : 顯示最近創建的容器。
-n 目錄：最近創建的n個目錄。
--no-trunc :不截斷輸出。
-q ：靜默模式，只顯示容器編號。
-s :顯示總的文件大小。
```

### 實例

```shell
runoob@runoob:~$ docker ps
CONTAINER ID   IMAGE          COMMAND                ...  PORTS                    NAMES
09b93464c2f7   nginx:latest   "nginx -g 'daemon off" ...  80/tcp, 443/tcp          myrunoob
96f7f14e99ab   mysql:5.6      "docker-entrypoint.sh" ...  0.0.0.0:3306->3306/tcp   mymysql
```

輸出詳情介紹：

1. **CONTAINER ID**：容器ID。
2. **IMAGE**: 使用的鏡像。
3. **COMMAND**：啟動容器時運行的命令。
4. **CREATED**: 容器的創建時間。
5. **STATUS**：容器狀態。
   * 狀態有7種：
        1. 創建（已創建）
        1. restarting（重啟中）
        1. 運行（運行中）
        1. 移除（遷移中）
        1. paused（暫停）
        1. 退出（停止）
        1. 死亡（死亡）
6. **PORTS**：容器的端口信息和使用的連接類型（tcp\udp）。
7. **NAMES**：自動分配的包含名稱。

[參考文章](https://www.runoob.com/docker/docker-ps-command.html)
