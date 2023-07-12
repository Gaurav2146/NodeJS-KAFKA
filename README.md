# NodeJS-KAFKA

Topic creation in kafka

./KAFKA_BINARY/kafka_2.12-3.5.0/bin/windows/kafka-topics.bat --bootstrap-server localhost:9093 --create --topic order-created --partitions 3 --replication-factor 1

Listing created topics

kafka-topics.bat --bootstrap-server localhost:9093 --list
