# NodeJS-KAFKA

1. Create directory KAFKA_BINARY

2. Go to https://kafka.apache.org/downloads

Binary downloads:
Scala 2.12  - kafka_2.12-3.5.0.tgz (asc, sha512)

3. Download latest .tgz Binary File inside KAFKA_BINARY directory.

4. Extract File using 7-Zip inside KAFKA_BINARY directory.

Topic creation in kafka

./KAFKA_BINARY/kafka_2.12-3.5.0/bin/windows/kafka-topics.bat --bootstrap-server localhost:9093 --create --topic order-created --partitions 3 --replication-factor 1

Listing created topics

./KAFKA_BINARY/kafka_2.12-3.5.0/bin/windows/kafka-topics.bat --bootstrap-server localhost:9093 --list
