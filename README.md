# 실행 방법

### 1. publisher, listener 서버를 실행한다.

```
➜  publisher git:(master) yarn install
➜  publisher git:(master) yarn start
➜  listener git:(master) yarn install
➜  listener git:(master) yarn start
```

### 2. docker 로 nats 를 실행한다.

- docker desktop 을 실행한다.
- 루트에서 `docker-compose up -d --build`

### 3. postman 과 같은 도구로 API 를 요청하고, 이벤트 pub/sub 을 확인한다.

- request: POST 127.0.0.1:3000/notify
- response: 201 CREATED
- listener console 에 출력한 이벤트 메시지 배열에 출력되는 것을 확인한다.

```bash
➜  listener git:(master) ✗ yarn start
yarn run v1.22.19
$ nest start
[Nest] 56391  - 01/24/2024, 5:35:07 PM     LOG [NestFactory] Starting Nest application...
[Nest] 56391  - 01/24/2024, 5:35:07 PM     LOG [InstanceLoader] AppModule dependencies initialized +14ms
[Nest] 56391  - 01/24/2024, 5:35:07 PM    WARN [ServerKafka] WARN [undefined] KafkaJS v2.0.0 switched default partitioner. To retain the same partitioning behavior as in previous versions, create the producer with the option "createPartitioner: Partitioners.LegacyPartitioner". See the migration guide at https://kafka.js.org/docs/migration-guide-v2.0.0#producer-new-default-partitioner for details. Silence this warning by setting the environment variable "KAFKAJS_NO_PARTITIONER_WARNING=1" {"timestamp":"2024-01-24T08:35:07.924Z","logger":"kafkajs"}
[Nest] 56391  - 01/24/2024, 5:35:07 PM     LOG [ServerKafka] INFO [Consumer] Starting {"timestamp":"2024-01-24T08:35:07.978Z","logger":"kafkajs","groupId":"hero-consumer-server"}
[Nest] 56391  - 01/24/2024, 5:35:25 PM     LOG [ServerKafka] INFO [ConsumerGroup] Consumer has joined the group {"timestamp":"2024-01-24T08:35:25.463Z","logger":"kafkajs","groupId":"hero-consumer-server","memberId":"hero-server-1d28d38f-2d03-4976-8e7a-6869efd3672c","leaderId":"hero-server-1d28d38f-2d03-4976-8e7a-6869efd3672c","isLeader":true,"memberAssignment":{"notify-something":[0]},"groupProtocol":"RoundRobinAssigner","duration":17484}
[Nest] 56391  - 01/24/2024, 5:35:25 PM     LOG [NestMicroservice] Nest microservice successfully started +2ms
before:  [ 'message1' ]
after:  [ 'message1', 'true' ]
2 0 notify-something
```

# 참고

- https://docs.nestjs.com/microservices/kafka
- https://engschool.tistory.com/213
- https://engschool.tistory.com/212
